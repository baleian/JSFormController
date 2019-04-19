
SIP.namespace('Controller', (module) => {

	module('TabController', (exports) => {
		
		function TabController() {

		}

		TabController.prototype.load = function () {
			console.log('Controller.TabController.load');
			return true;
		}

		return TabController;
	});

});