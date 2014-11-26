// ANGLER
// "A lightweight photo inventory app using AngularJS"
// Design and programmed by Joshua Hatcher, (c) 2014

(function(doc) {
	'use strict';

	var app = angular.module('angler', []);

	app.controller('GalleryController', function() {
		this.pics = pics;
		this.current = null;
		this.show = function(val) {
			var popup = doc.querySelector('.popup');
			this.current = val;
			fadeIn(popup, 'fast');
		};
		this.browse = function(update) {
			if (this.pics[this.current + update]) {
				this.current += update;			
			}
		};
		this.close = function() {
			this.current = null;
		};
	});

	app.directive('gallery', function() {
		return {
			restrict: 'A',
			templateUrl: 'gallery.html'
		}
	});

	app.directive('popup', function() {
		return {
			restrict: 'A',
			templateUrl: 'popup.html'
		}
	});

	setTimeout(function() {
		fadeIn(doc.body);
	}, 300);

	/*
	**	Fades in an element
	**	@el String
	**	@speed optional String
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

	/*
	**	Fades out an element
	**	@el String
	**	@speed optional String
	*/
	function fadeAut(el, speed, cb) {
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
				} else {
					cb();
				}
			};
		tick();
	};

	var pics = [
		{
			sm: 'img/1a.png',
			full: 'img/1a_full.png'
		},
		{
			sm: 'img/2a.png',
			full: 'img/2a_full.png'
		},
		{
			sm: 'img/3a.png',
			full: 'img/3a_full.png'
		},
		{
			sm: 'img/4a.png',
			full: 'img/4a_full.png'
		},
		{
			sm: 'img/1a.png',
			full: 'img/1a_full.png'
		},
		{
			sm: 'img/2a.png',
			full: 'img/2a_full.png'
		},
		{
			sm: 'img/3a.png',
			full: 'img/3a_full.png'
		},
		{
			sm: 'img/4a.png',
			full: 'img/4a_full.png'
		},
		{
			sm: 'img/1a.png',
			full: 'img/1a_full.png'
		},
		{
			sm: 'img/2a.png',
			full: 'img/2a_full.png'
		},
		{
			sm: 'img/3a.png',
			full: 'img/3a_full.png'
		},
		{
			sm: 'img/4a.png',
			full: 'img/4a_full.png'
		}
	];
}(document));