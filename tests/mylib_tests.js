/* global describe, it, before */
var assert = require('assert');
describe('my library', function() {
	var mylib;
	before(function() {
		// load jsdom globally for browser code
		this.jsdom = require('jsdom-global')();
		// require your browser js here
		require('../mylib');
		mylib = window.mylib;
	});
	after(function() {
		// remove globals
		this.jsdom();
	});

	it('works', function() {
		assert.equal(mylib.greet(), 'hola');
	});
	it('multiplies 0', function() {
		assert.equal(mylib.dang(0), 0);
	});
});