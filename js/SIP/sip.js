(function (window) {

	var namespaces = new NameSpace('SIP');
	var modules = {};

	function Module(name, define) {
		this.name = name;
		this.define = define;
		this.module;

		var that = this;
		this._fn = function () {
			var exports = {};
			that.module = that.define(exports);
			if (!that.module) that.module = new Object();
			for (var k in exports) {
				that.module[k] = exports[k];
			}
		}
		this._fn();
	}

	function NameSpace(name, parent) {
		this.name = name;
		this.define;
		this.parent = parent;
		this.childs = {};
		this.modules = [];
		this.requires = {};

		var that = this;
		this.module = function (name, define) {
			if (!name) return;
			name = that.name + '.' + name;
			if (!define) return modules[name];	
			if (modules[name]) return;
			modules[name] = new Module(name, define);
			that.modules.push(modules[name]);
		}

		this.require = function (name) {
			that.requires[name] = modules[name];
			return modules[name];
		}
	}

	function getNameSpace(names) {
		return names.split('.').reduce((ns, name) => {
			if (!ns.childs[name]) {
				ns.childs[name] = new NameSpace(name, ns);
			}
			return ns.childs[name];
		}, namespaces);
	}

	function SIP(name) {
		return SIP.import(name);
	}

	SIP.namespace = function (name, define) {
		var ns = getNameSpace(name);
		ns.define = define;

		function defineAll(namespace) {
			for (k in namespace.childs) {
				var ns = namespace.childs[k];
				if (ns.define) {
					ns.define(ns.module, ns.require);
				}
				defineAll(ns);
			}
		}
		defineAll(namespaces);
		defineAll(namespaces);
	}

	SIP.import = function (name) {
		var m = modules[name];
		return m.module;
	}



	// Global public methods
	window.SIP = SIP;

})(window);

// SIP.import('Service.Category');
// SIP.import('Controller.ListController');
// SIP.import('Service.Category');
// SIP.import('Controller.ListController');
// SIP.import('Service.Category');
// SIP.import('Controller.ListController');
// SIP.import('Service.Category');
// SIP.import('Controller.ListController');