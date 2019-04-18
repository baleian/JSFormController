var CategoryController = CategoryController || {};

CategoryController.getInstance = (function () {

	var instance;
	var DATA = [];

	function Controller() {
		for (var i = 1001; i <= 1499; i++) {
			var categoryId = '' + i;
			var code1 = categoryId.substring(0, 2);
			var name1 = '교통' + code1;
			var code2 = categoryId.substring(2, 4);
			var name2 = '테스트' + categoryId;
			if (code2 == '99') name2 = '기타' + code1;

			DATA.push({ 
				'categoryId': categoryId, 
				'code1': code1,
				'name1': name1,
				'code2': code2,
				'name2': name2
			});
		}

		for (var i = 2001; i <= 2199; i++) {
			var categoryId = '' + i;
			var code1 = categoryId.substring(0, 2);
			var name1 = '통신' + code1;
			var code2 = categoryId.substring(2, 4);
			var name2 = '테스트' + categoryId;
			if (code2 == '99') name2 = '기타' + code1;

			DATA.push({ 
				'categoryId': categoryId, 
				'code1': code1,
				'name1': name1,
				'code2': code2,
				'name2': name2
			});
		}

		for (var i = 9901; i <= 9999; i++) {
			var categoryId = '' + i;
			var code1 = categoryId.substring(0, 2);
			var name1 = '기타';
			var code2 = categoryId.substring(2, 4);
			var name2 = '테스트' + categoryId;
			if (code2 == '99') name2 = '기타' + code1;

			DATA.push({ 
				'categoryId': categoryId, 
				'code1': code1,
				'name1': name1,
				'code2': code2,
				'name2': name2
			});
		}
	}

	Controller.prototype.get = function (params) {
		var categoryId = params['categoryId'];
		if (!categoryId) throw 'Required check fail';
		return DATA.find((data) => data['categoryId'] === params['categoryId']);
	}

	Controller.prototype.add = function (params) {
		var categoryId = params['categoryId'];
        var code1 = params['code1'];
        var name1 = params['name1'];
        var code2 = params['code2'];
        var name2 = params['name2'];
        if (!categoryId || !code1 || !name1 || !code2 || !name2) throw 'Required check fail';
		var categoryVO = this.get(params);
		if (categoryVO) throw 'Already exist categoryId';
		DATA.push({ 
			'categoryId': params['categoryId'],
			'code1': params['code1'],
			'name1': params['name1'],
			'code2': params['code2'],
			'name2': params['name2']
		});
	}

	Controller.prototype.edit = function (params) {
		var categoryId = params['categoryId'];
        var code1 = params['code1'];
        var name1 = params['name1'];
        var code2 = params['code2'];
        var name2 = params['name2'];
        if (!categoryId || !code1 || !name1 || !code2 || !name2) throw 'Required check fail';
		var categoryVO = this.get(params);
		if (!categoryVO) throw 'Not exist category';
		categoryVO['code1'] = params['code1'];
		categoryVO['name1'] = params['name1'];
		categoryVO['code2'] = params['code2'];
		categoryVO['name2'] = params['name2'];
	}

	Controller.prototype.delete = function (params) {
		var categoryId = params['categoryId'];
		if (!categoryId) throw 'Required check fail';
		var categoryVO = this.get(params);
		if (!categoryVO) throw 'Not exist category';
		DATA = DATA.filter((data) => data !== categoryVO);
	}

	Controller.prototype.getCount = function (params) {
		var categoryId = params['categoryId'];
        var code1 = params['code1'];
        var name1 = params['name1'];
        var code2 = params['code2'];
        var name2 = params['name2'];
        return DATA
        	.filter((data) => {
        		if (categoryId && data['categoryId'] !== categoryId) return false;
        		if (code1 && data['code1'] !== code1) return false;
        		if (name1 && data['name1'].indexOf(name1) < 0) return false;
        		if (code2 && data['code2'] !== code2) return false;
        		if (name2 && data['name2'].indexOf(name2) < 0) return false;
        		return true;
        	})
        	.length;
	}

	Controller.prototype.getList = function (params) {
		var categoryId = params['categoryId'];
        var code1 = params['code1'];
        var name1 = params['name1'];
        var code2 = params['code2'];
        var name2 = params['name2'];
        var page = params['page'] || 1;
        var limit = params['limit'] || 1000;
        var skip = (page - 1) * limit;
        return DATA
        	.filter((data) => {
        		if (categoryId && data['categoryId'] !== categoryId) return false;
        		if (code1 && data['code1'] !== code1) return false;
        		if (name1 && data['name1'].indexOf(name1) < 0) return false;
        		if (code2 && data['code2'] !== code2) return false;
        		if (name2 && data['name2'].indexOf(name2) < 0) return false;
        		return true;
        	})
        	.sort((a, b) => { 
        		return a['categoryId'] - b['categoryId']; 
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
