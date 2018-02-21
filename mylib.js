var dang = document.getElementById('#whatever');
(function() {
	'use strict';
	window.mylib = {
		greet: function() {
			return 'hola'
		},
		dang: function() {
			return arguments[0] * 77;
		}
	};
})()