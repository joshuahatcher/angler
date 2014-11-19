(function(doc) {
	'use strict';

	var popup = doc.querySelector('.popup'),
		overlay = doc.querySelector('.overlay');

	setTimeout(init, 300);

	/*
		Give Angular a few milliseconds to load its content before binding events
	*/
	function init() {
		var imgs = doc.querySelectorAll('img');

		fadeIn(doc.body);
		addEvent('click', imgs, showPopup);
		addEvent('click', overlay, closePopup);
	}

	/*
		Fades in an element
		@el String
		@speed optional String
	*/
	// Inspired by YouMightNotNeedJQuery.com
	function fadeIn(el, speed) {
		el.style.opacity = 0;

		var speedMap = {
				slow: 1000,
				normal: 500,
				fast: 200
			},
			denom = speedMap[speed] || 500,
			last = +new Date(),
			tick = function() {
				el.style.opacity = +el.style.opacity + (new Date() - last) / denom;
				last = +new Date();

				if (+el.style.opacity < 1) {
					(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
				} 
			};
		tick();
	};

	function fadeAut(el, speed) {
		el.style.opacity = 1;

		var speedMap = {
				slow: 1000,
				normal: 500,
				fast: 200
			},
			denom = speedMap[speed] || 500,
			last = +new Date(),
			tick = function() {
				el.style.opacity = +el.style.opacity - (new Date() - last) / denom;
				last = +new Date();

				if (+el.style.opacity > 0) {
					(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
				} 
			};
		tick();
	};

	/*
		Adds an event to a target, cross-browser compatible
		@ev String
		@els
	*/
	function addEvent(ev, els, func) {
		var x, len, el;

		els = isArray(els) ? els : [ els ];
		for (x = 0, len = els.length; x < len; x++) {
			el = els[x];
		
		 	if (el.addEventListener)
		   		el.addEventListener(ev, func, false);
		 	else if (el.attachEvent) {
		    	el.attachEvent('on'+ev, func);
		 	}
		 	else {
		  		el[ev] = func;
		 	}
		}
	};

	/*
		Determines whether an input is an array
	*/
	function isArray(input) {
		return Object.prototype.toString.call(input) === ('[object NodeList]' || '[object Array]');
	};

	/*
		Shows popup with correct contents
	*/
	function showPopup(e) {
		overlay.style.height = window.innerHeight + 'px';
		overlay.style.display = 'block';
		popup.style.display = 'block';

		popup.style.top = '20px';
		fadeIn(popup);
	};

	/*
		Closes popup
	*/
	function closePopup(e) {
		var target = e.target || e.srcElement;

		target.style.display = 'none';
		fadeAut(popup)
	}

}(document));