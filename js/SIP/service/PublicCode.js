
SIP.namespace('Service', (module) => {

	module('PublicCode', (exports) => {

		exports.getList = function () {
			console.log('Service.PublicCode.getList');
			return true;
		};

	});

});