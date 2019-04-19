var SIP = SIP || {};

(function (SIP) {
	SIP.Category  = SIP.Category || {};

	SIP.Category = function get(query, callback) {
		var paramNames = ['categoryId'];
		try {
			var controller = CategoryController.getInstance();
			var response = controller.get(query);
			if (!response) {
				throw 'Not acceptable category id';
			}
			callback(null, response);
		} catch (e) {
			callback(e);
		}
	}

	SIP.Category.add = function (query, callback) {
		var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2'];
		try {
			var controller = CategoryController.getInstance();
			controller.add(query);
			callback(null, 'SUCCESS');
		} catch (e) {
			callback(e);
		}
	}

	SIP.Category.edit = function (query, callback) {
		var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2'];
		try {
			var controller = CategoryController.getInstance();
			controller.edit(query);
			callback(null, 'SUCCESS');
		} catch (e) {
			callback(e);
		}
	}

	SIP.Category.delete = function (query, callback) {
		var paramNames = ['categoryId'];
		try {
			var controller = CategoryController.getInstance();
			controller.delete(query);
			callback(null, 'SUCCESS');
		} catch (e) {
			callback(e);
		}
	}

	SIP.Category.getCount = function (query, callback) {
		var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2'];
		try {
			var controller = CategoryController.getInstance();
			var response = controller.getCount(query);
			callback(null, response);
		} catch (e) {
			callback(e);
		}
	}

	SIP.Category.getList = function (query, callback) {
		var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2', 'page', 'limit'];
		try {
			var controller = CategoryController.getInstance();
			var response = controller.getList(query);
			callback(null, response);
		} catch (e) {
			callback(e);
		}
	}

})(SIP);