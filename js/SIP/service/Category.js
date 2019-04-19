
SIP.namespace('Service', (module, require) => {
	console.log('Service namespace define!!');

	var ListController = require('Controller.ListController');

	module('Category', (exports) => {
		console.log("Category module define!!");

		exports.getList = function () {
			var controller = new ListController.module();
			console.log('Service.Category.getList');
			console.log(controller.add());
			return true;
		};

		exports.getCount = function() {
			// var controller = new ListController();
			console.log('Service.Category.getCount');
			// console.log(controller.edit());
		}

	});	
	
});
