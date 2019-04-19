
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////





// (function () {
// 	'use strict';

// 	// namespace: 'SIP'
// 	var SIP = window.SIP || {};

// 	function _makeModule(f) {
// 		var obj = Object();

// 		(function (module) {
// 			var _exports = {};
// 			f(_exports);
// 			for (var p in _exports) {
// 				module[p] = _exports[p];
// 			}
// 		})(obj);
// 	}

// 	function _import(moduleName) {
// 		return {};
// 	}

// 	// SIP export modules
// 	(function (module) {
// 		var subModule = { exports: {} };

// 		(function (module, exports) {
// 			// namespace index.js 
// 			exports.module1 = _import('module1');
// 			exports.module2 = _import('module2');
// 			exports.module3 = _import('module3');
// 		})(subModule, subModule.exports);

// 		for (var property in subModule.exports) {
// 			module[property] = subModule.exports[property];
// 		}
// 	})(SIP);


// 	// module1
// 	var _module = {};
// 	(function (module) {
// 		var _module = { exports: {} };

// 		(function (module, exports) {
// 			// module1.js
// 			exports.test = function () {
// 				console.log("I'm module1");
// 				return true;
// 			};
// 		})(_module, _module.exports);

// 		for (var property in _module.exports) {
// 			module[property] = _module.exports[property];
// 		}
// 	})(_module);

// 	console.log(_module);


// 	window.SIP = SIP;


// 	// // module1
// 	// (function (module, exports) {

// 	// 	function test() {
// 	// 		console.log("I'm module1");
// 	// 	}

// 	// 	module.exports = {
// 	// 		'test': test
// 	// 	};

// 	// })();

// 	// // module2
// 	// (function (module, exports) {

// 	// 	function test() {
// 	// 		console.log("I'm module2");
// 	// 	}

// 	// 	exports.test = test;

// 	// })();

// 	// // module3
// 	// (function (module, exports) {

// 	// 	var module1 = _import('module1');

// 	// 	function test() {
// 	// 		console.log("I'm module3");
// 	// 		console.log("..test import module1..");
// 	// 		module1.test();
// 	// 		console.log("..test import module1 end..");
// 	// 	}

// 	// 	exports.test = test;

// 	// })();


// 	// SIP.module1 = (function () {
// 	// 	(function (module) {

// 	// 		module.test1 = function () {
// 	// 			console.log('test1');
// 	// 		}

// 	// 	}();

// 	// })();

// 	// // require module1
// 	// SIP.module2 = (function (module1) {

// 	// 	(function (module) {

// 	// 		module

// 	// 	})();

// 	// })(SIP.module1)


// })();



// // (function (module) {

// // 	function EventListener() {
// // 		this.eventListener = {};
// // 	}

// // 	EventListener.prototype.on = function (event, callback) {
// // 		this.eventListener[event] = this.eventListener[event] || [];
// // 		this.eventListener[event].push(callback);
// // 	}

// // 	EventListener.prototype.off = function (event) {
// // 		delete this.eventListener[event];
// // 	}

// // 	EventListener.prototype.trigger = function(event, ...args) {
// // 		var	callbacks = this.eventListener[event] || [];
// // 		callbacks.forEach((callback) => {
// // 			if (args.length > 0) {
// // 				return callback(args);
// // 			}
// // 			callback();
// // 		});
// // 	}

// // 	module.EventListener

// // })(SIP['EventListener']);
















