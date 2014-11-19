// ANGLER
// "A lightweight photo inventory app using AngularJS"
// Design and programmed by Joshua Hatcher, (c) 2014

(function() {
	'use strict';

	var app = angular.module('angler', []);

	app.controller('GalleryController', function() {
		this.pics = pics;
		this.current = null;
		this.show = function(val) {
			this.current = val;
		};
		this.browse = function(update) {
			this.current = this.current + (update === 1 ? 1 : -1);
		};

	});

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
}());