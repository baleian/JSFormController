(function (SIP) {
	SIP.PublicCode  = SIP.PublicCode || {};

	SIP.PublicCode = function get(query, callback) {
		var paramNames = ['publicCode'];
		try {
			var controller = PublicCodeController.getInstance();
			var response = controller.get(query);
			if (!response) {
				throw 'Not acceptable publicCode';
			}
			callback(null, response);
		} catch (e) {
			callback(e);
		}
	}

	SIP.PublicCode.add = function (query, callback) {
		var paramNames = ['publicCode', 'publicName', 'categoryId'];
		try {
			var controller = PublicCodeController.getInstance();
			controller.add(query);
			callback(null, 'SUCCESS');
		} catch (e) {
			callback(e);
		}
	}

	SIP.PublicCode.edit = function (query, callback) {
		var paramNames = ['publicCode', 'publicName', 'categoryId'];
		try {
			var controller = PublicCodeController.getInstance();
			controller.edit(query);
			callback(null, 'SUCCESS');
		} catch (e) {
			callback(e);
		}
	}

	SIP.PublicCode.delete = function (query, callback) {
		var paramNames = ['publicCode'];
		try {
			var controller = PublicCodeController.getInstance();
			controller.delete(query);
			callback(null, 'SUCCESS');
		} catch (e) {
			callback(e);
		}
	}

	SIP.PublicCode.getCount = function (query, callback) {
		var paramNames = ['publicCode', 'publicName', 'categoryId'];
		try {
			var controller = PublicCodeController.getInstance();
			var response = controller.getCount(query);
			callback(null, response);
		} catch (e) {
			callback(e);
		}
	}

	SIP.PublicCode.getList = function (query, callback) {
		var paramNames = ['publicCode', 'publicName', 'categoryId', 'page', 'limit'];
		try {
			var controller = PublicCodeController.getInstance();
			var response = controller.getList(query);
			callback(null, response);
		} catch (e) {
			callback(e);
		}
	}

})(SIP);