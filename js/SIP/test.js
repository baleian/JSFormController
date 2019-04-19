(function () {
	'use strict';

	var defines = {};
	var modules = {};

	function module(name, define) {
		if (defines[name]) throw Error('already defined module name');
		defines[name] = define;
	}

	function require(name) {
		return modules[name];
	}

////////////////////////////////////////////////////////////////////////////////

	(function () {
		var namespace = 'SIP';

		module(namespace, (exports) => {

			exports.module1 = require('module1');
			exports.module2 = require('module2');

		});


		module('module2', (exports) => {
			var module1 = require('module1');

			exports.test = function () {
				console.log("I'm module2");
				console.log('hey... module1..?');
				module1.test2();
				return true;
			}

		});


		module('module1', (exports) => {
			var module2 = require('module2');

			exports.test = function () {
				console.log("I'm module1");
				console.log('hey... module2..?');
				module2.test();
				return true;
			}

			exports.test2 = function () {
				console.log("I'm module1 test2");
				return true;
			}

			exports.submodule1 = require('submodule1');
		});


		module('submodule1', (exports) => {
			var module1 = require('module1');
			var module2 = require('module2');

			exports.test = function () {
				console.log("I'm submodule1");
				console.log('hey... module1..?');
				module1.test();
				return true;
			}

			exports.test2 = function () {
				console.log("I'm submodule1");
				console.log('hey... module2..?');
				module2.test();
				return true;
			}
		});

	})();




////////////////////////////////////////////////////////////////////////////////
	(function (namespace) {
		for (var _name in defines) {
			for (var name in defines) {
				var _module = new Object();
				var _exports = {};
				var define = defines[name]
				define(_exports);
				for (var p in _exports) 
					_module[p] = _exports[p];
				modules[name] = _module;
			}
		}
		var module = window[namespace] || {};
		var exports = require(namespace);
		for (var p in exports) {
			module[p] = exports[p];
		}
		window[namespace] = module;
	})(namespace);
	
})();