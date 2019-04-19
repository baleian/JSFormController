
SIP.namespace('Controller', (module, require) => {
	

	var Category = require('Service.Category');


	module('ListController', (exports) => {

		function ListController() {

		}

		ListController.prototype.load = function () {
			console.log('Controller.ListController.load');
			console.log(Category.module.getList());
			return true;
		}

		ListController.prototype.add = function () {
			console.log('Controller.ListController.add');
			// console.log(Category.getCount());
			return true;
		}

		ListController.prototype.edit = function () {
			console.log('Controller.ListController.edit');	
			return true;
		}

		return ListController;

	});

}, ['Service.Category']);
