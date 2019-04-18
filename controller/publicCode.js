var PublicCodeController = PublicCodeController || {};

PublicCodeController.getInstance = (function () {

	var instance;
	var DATA = [];

	function Controller() {
		var categories = CategoryController.getInstance().getList({});

		for (var i = 1000; i <= 9999; i++) {
			var publicCode = 'A0' + i;
			var publicName = '테스트' + i;
			var category = CategoryController.getInstance().get({ categoryId: '9999' });
			if (Math.floor(Math.random() * 5)) {
				category = categories[Math.floor(Math.random() * categories.length)];
			}
			DATA.push({ 
				'publicCode': publicCode, 
				'publicName': publicName,
				'categoryId': category['categoryId'],
				'categoryName': category['name2']
			});
		}
	}

	Controller.prototype.get = function (params) {
		var publicCode = params['publicCode'];
		if (!publicCode) throw 'Required check fail';
		return DATA.find((data) => data['publicCode'] === params['publicCode']);
	}

	Controller.prototype.add = function (params) {
		var publicCode = params['publicCode'];
        var publicName = params['publicName'];
        var categoryId = params['categoryId'];
        if (!publicCode || !publicName || !categoryId) throw 'Required check fail';
        var categoryVO = CategoryController.getInstance().get(params);
        if (!categoryVO) throw 'Not acceptable categoryId';
		var publicCodeVO = this.get(params);
		if (publicCodeVO) throw 'Already exist publicCode';
		DATA.push({ 
			'publicCode': params['publicCode'],
			'publicName': params['publicName'],
			'categoryId': params['categoryId']
		});
	}

	Controller.prototype.edit = function (params) {
		var publicCode = params['publicCode'];
        var publicName = params['publicName'];
        var categoryId = params['categoryId'];
        if (!publicCode || !publicName || !categoryId) throw 'Required check fail';
        var categoryVO = CategoryController.getInstance().get(params);
        if (!categoryVO) throw 'Not acceptable categoryId';
		var publicCodeVO = this.get(params);
		if (!publicCodeVO) throw 'Not exist publicCode';
		publicCodeVO['publicName'] = params['publicName'];
		publicCodeVO['categoryId'] = params['categoryId'];
	}

	Controller.prototype.delete = function (params) {
		var publicCode = params['publicCode'];
		if (!publicCode) throw 'Required check fail';
		var publicCodeVO = this.get(params);
		if (!publicCode) throw 'Not exist publicCode';
		DATA = DATA.filter((data) => data !== publicCodeVO);
	}

	Controller.prototype.getCount = function (params) {
		var publicCode = params['publicCode'];
        var publicName = params['publicName'];
        var categoryId = params['categoryId'];
        return DATA
        	.filter((data) => {
        		if (publicCode && data['publicCode'] !== publicCode) return false;
        		if (publicName && data['publicName'].indexOf(publicName) < 0) return false;
        		if (categoryId && data['categoryId'] !== categoryId) return false;
        		return true;
        	})
        	.length;
	}

	Controller.prototype.getList = function (params) {
		var publicCode = params['publicCode'];
        var publicName = params['publicName'];
        var categoryId = params['categoryId'];
        var page = params['page'] || 1;
        var limit = params['limit'] || 1000;
        var skip = (page - 1) * limit;
        return DATA
        	.filter((data) => {
        		if (publicCode && data['publicCode'] !== publicCode) return false;
        		if (publicName && data['publicName'].indexOf(publicName) < 0) return false;
        		if (categoryId && data['categoryId'] !== categoryId) return false;
        		return true;
        	})
        	.sort((a, b) => { 
        		return a['publicCode'] - b['publicCode']; 
        	})
        	.slice(skip, skip + limit);
	}

	return function () {
		if (!instance) {
			instance = new Controller();
		}
		return instance;
	};

})();
