// create class
var Class = function(/* definition */){
	var obj = function() {
		if (this.__const) this.__const.apply(this,arguments);
	}
	if (arguments[0]) Class.extend(obj.prototype, arguments[0]);

	return obj;
}

// class inheritance - multiple inheritance supportable
Class.extend = function(superClass/*, subCls1, subCls2, ... */) {
	var obj = superClass;
	for(var i=1; i < arguments.length; i++) {
		if (arguments[i]) {
			for(var x in arguments[i]) {
				obj[x] = arguments[i][x];
			}
		}
	}

	return obj;
}

// global event object
var Event = {
	register : function(oEl, sEvent, pFunc) {
		oEl = $(oEl);
		if (oEl.addEventListener) {
			oEl.addEventListener(sEvent, pFunc, false);
		} else if(oEl.attachEvent) {
			oEl.attachEvent('on'+sEvent, pFunc);
		}
	},
	unregister : function(oEl, sEvent, pFunc) {
		oEl = $(oEl);
		if (oEl.removeEventListener) {
			oEl.removeEventListener(sEvent, pFunc, false);
		} else if(oEl.detachEvent) {
			oEl.detachEvent('on'+sEvent, pFunc);
		}
	},
 	ready : function(evt) {
		var e = evt || window.event;
		var b = document.body;

		Class.extend(e, {
			element : e.target || e.srcElement,
			page_x  : e.pageX || e.clientX+b.scrollLeft-b.clientLeft,
			page_y  : e.pageY || e.clientY+b.scrollTop-b.clientTop,
			key     : {
				alt : e.altKey,
				ctrl : e.ctrlKey,
				shift : e.shiftKey,
				up : [38,104].has(e.keyCode),
				down : [40,98].has(e.keyCode),
				left : [37,100].has(e.keyCode),
				right : [39,102].has(e.keyCode),
				enter : (e.keyCode==13)
			},
			mouse   : {
				left   : (e.which&&e.button==0)||!!(e.button&1),
				middle : (e.which&&e.button==1)||!!(e.button&4),
				right  : (e.which&&e.button==2)||!!(e.button&2)
			},
			stop : function() {
				if (this.preventDefault) {
					this.preventDefault();
					this.stopPropagation();
				} else {
					this.returnValue = false;
					this.cancelBubble = true;
				}
			}
		});

		return e;
	}
}

// global element object
var Element = {
	show : function() {
		[].load(arguments).each(function(v){ $(v).style.display=''; });
	},
	hide : function() {
		[].load(arguments).each(function(v){ $(v).style.display='none'; });
	},
	toggle : function() {
		[].load(arguments).each(function(v){ Element[Element.visible(v)?'hide':'show'](v) });
	},
	visible : function(oEl) {
		return ($(oEl).style.display!='none');
	},
	realPos : function(oEl) {
		if (oEl.offsetParent) {
			var p = this.realPos(oEl.offsetParent);
			return { top: oEl.offsetTop+p.top, left: oEl.offsetLeft+p.left };
		} else {
			return { top: oEl.offsetTop, left:oEl.offsetLeft };
		}
	},
	getCSS : function(oEl, name) {
		return oEl.style[name];
	},
	setCSS : function(oEl, css) {
		Class.extend(oEl.style, css);
	},
	hasClass : function(oEl, className) {
		return $(oEl).className.split(/\s+/).has(className);
	},
	addClass : function(oEl, className) {
		if (!this.hasClass(oEl, className)) ($(oEl).className+=' '+className).replace(/^\s+/,'');
	},
	removeClass : function(oEl, className) {
		$(oEl).className = $(oEl).className.replace(new RegExp('(^|\s+)'+className+'($|\s+)','g'),'');
	}
}

// array extend
Class.extend(Array.prototype, {
	has : function(value) {
		for(var i=0; i<this.length; i++) {
			if (this[i] == value) return true;
		}
		return false;
	},
	load : function(obj) {
		for(var i=0; i<obj.length; i++) {
			this.push(obj[i]);
		}
		return this;
	},
	each : function(iter) {
		for(var i=0; i<this.length; i++) {
			iter(this[i],i);
		}
	},
	filter : function(iter) {
		var ret = [];
		for(var i=0; i<this.length; i++) {
			if (iter(this[i],i)) ret.push(this[i]);
		}
		return ret;
	},
	map : function(iter) {
		for(var i=0; i<this.length; i++) {
			this[i] = iter(this[i],i);
		}
	},
	refuse : function(value) {
		return this.filter(function(v){ return v!=value });
	}
});
if (Array.prototype.forEach) {
	Array.prototype.each = Array.prototype.forEach;
}

// function extend
Class.extend(Function.prototype, {
	bind : function(obj) {
		var f=this, a=[].load(arguments);a.shift();
		return function() {
			return f.apply(obj, a);
		}
	},
	bindForEvent : function(obj) {
		var f=this;
		return function(e) {
			return f.call(obj, Event.ready(e));
		}
	}
});

// get object by id
function $() {
	var ret = [];
	for(var i=0; i < arguments.length; i++) {
		if (typeof arguments[i] == 'string') {
			ret.push(document.getElementById(arguments[i]));
		} else {
			ret.push(arguments[i]);
		}
	}
	return ret[1]?ret:ret[0];
}

// create element
function $c(tag) {
	return document.createElement(tag);
}

// get elements by class name
document.getElementsByClassName = function(className, oParent) {
	var a = [].load(($(oParent) || document.body).getElementsByTagName('*'));
	var r = new RegExp('(^|\\s)'+className+'($|\\s)');
	return a.filter(function(v){ return r.match(v.className); });
}
var Selectbox = Class({
	__const : function(id) {
		var s = this._source  = $(id);
		this.options = Class.extend({
			height      : s.offsetHeight,
			width       : s.offsetWidth,
			fontSize    : 12,
			listSize    : 8,
			skinActive  : false,
			skinFormat  : '/cn/include/js/common/select_arrow02.gif', // left, right, up, down, bt
			borderActive: true,
			borderColor : '#CCCCCC',
			optTxtColor : '#4D4D4D',
			optBgColor  : 'white',
			optTxtHover : '#4D4D4D',
			optBgHover  : '#F2F2F2'
		}, arguments[1]);

		var o = this.options;
		var e = this._element = $c('div');
		var c = e.appendChild($c('div')); // container
		var p = Element.realPos(this._source);

		// replace html element
		this._source.parentNode.insertBefore(e, s);
		this._source.style.display = 'none';

		// border
		if (o.borderActive) {
			e.style.border = '1px solid '+o.borderColor;
		}

		Element.setCSS(e, {
			top : p.top+'px',
			left : p.left+'px',
			width : o.width+'px',
			height : (o.height-1)+'px',
			background : o.optBgColor
		});

		Element.setCSS(c, {
			width  : o.width+'px',
			height : (o.height-1)+'px',
			fontSize : o.fontSize+'px',
			overflow : 'hidden',
			cursor   : 'default'
		});
		c.onmousedown = this.onmousedown.bindForEvent(this);
		c.onmouseup   = this.onmouseup.bind(this);

		// button layer
		var b = c.appendChild($c('div'));
		Element.setCSS(b, {
			height     : '100%',
			background : 'no-repeat url('+o.skinFormat.replace('%s', 'bt')+') 50% 50%',
			cssFloat   : 'right',
			styleFloat : 'right'
		});

		// text box
		this._txt_element = c.appendChild($c('div'));
		with(this._txt_element) {
			appendChild(document.createTextNode(s.options[s.selectedIndex].text));
			style.height = (o.fontSize+4)+'px';
			style.overflow = 'hidden';
			style.marginTop = (Math.max(Math.floor((o.height-offsetHeight)/2),0)-1)+'px';
			style.paddingLeft = '4px';
			style.fontFamily = 'Arial';
		}
		c.appendChild($c('div')).style.clear = 'both';

		// re-margin
		var im = $c('img');
		im.onload = function(){b.style.width=im.width+'px'}
		im.src = o.skinFormat.replace('%s', 'bt');

		// options
		this._list_element = document.body.appendChild($c('div'));
		Element.setCSS(this._list_element, {
			position : 'absolute',
			border   : '1px solid '+o.borderColor,
			display  : 'none',
			overflow : 'auto',
			fontFamily : 'Arial',
			fontSize : o.fontSize+'px'
		});
		this._list_element.onmousedown = this.onscrollbar.bindForEvent(this);
		this.paint();

		// event binding
		this._event_onmousedown = this.onmousedown.bindForEvent(this);
	},
	onmousedown : function(e) {
		if (!Element.visible(this._list_element)) {
			var p = Element.realPos(this._element);

			this.paint();
			Element.show(this._list_element);
			if (this._list_element.offsetWidth < this._element.offsetWidth) {
				this._list_element.style.width = this._element.offsetWidth-2+'px';
			};
			Element.setCSS(this._list_element, {
				top : p.top+this._element.offsetHeight+'px',
				left : p.left+'px',
				zIndex : 1000
			});
		} else {
			Element.hide(this._list_element);
			Event.unregister(document.body, 'mousedown', this._event_onmousedown);
		}
	},
	onmouseup : function() {
		if (Element.visible(this._list_element)) {
			Event.register(document.body, 'mousedown', this._event_onmousedown);
		} 
	},
	onselect : function(e) {
		var el=e.element, o=this.options, s=this._source;
		
		s.selectedIndex = el._index;
		this._txt_element.firstChild.nodeValue = s.options[s.selectedIndex].text;

		this.onmousedown();
		if (this._source.onchange) this._source.onchange();
	},
	onover : function(e) {
		var el=e.element, c=[].load(el.parentNode.childNodes), i=el._index, o=this.options;

		c.map(function(v) {
			v.style.color = o.optTxtColor;
			v.style.background = o.optBgColor;
			return v;
		});
		el.style.color = o.optTxtHover;
		el.style.background = o.optBgHover;
	},
	onscrollbar : function(e) {
		e.stop();
	},
	paint : function() {
		var o=this.options,s=this._source,op;
		this._list_element.innerHTML = '';
		this._list_element.style.width = '';
		this._list_element.style.height = '';
		for(var i=0; i < s.options.length; i++) {
			op = this._makeOption(s.options[i].value, s.options[i].text);
			op._index  = i;
			Element.setCSS(op, {
				padding : '1px 4px',
				cursor  : 'default',
				color : (i==this._source.selectedIndex)?o.optTxtHover:o.optTxtColor,
				background : (i==this._source.selectedIndex)?o.optBgHover:o.optBgColor
			});
			this._list_element.appendChild(op);
		}

		var old_display = this._list_element.style.display;
		Element.show(this._list_element);
		if ((this._list_element.offsetHeight-2) > op.offsetHeight * o.listSize) {
			this._list_element.style.height = op.offsetHeight*o.listSize;
		}
		this._list_element.style.display = old_display;
	},
	_makeOption : function(value, text) {
		var o = $c('div'), t = this;
		o._value = value;
		o.appendChild(document.createTextNode(text));

		Event.register(o, 'mouseover', this.onover.bindForEvent(this));
		Event.register(o, 'mousedown', this.onselect.bindForEvent(this));

		return o;
	}
});
