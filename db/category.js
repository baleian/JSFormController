
var DATA = (function () {
    var DATA = [];
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

    return DATA;
})();


function selectOne(params) {
    return DATA.find((data) => data['categoryId'] === params['categoryId']);
}

function select(params) {
    var categoryId = params['categoryId'];
    var code1 = params['code1'];
    var name1 = params['name1'];
    var code2 = params['code2'];
    var name2 = params['name2'];
    var skip = parseInt(params['skip']) || 0;
    var limit = parseInt(params['limit']);
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
            return a['categoryId'] < b['categoryId'] ? -1 : 1; 
        })
        .slice(skip, skip + limit);
}

function count(params) {
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

function insert(params) {
    var data = selectOne(params);
    if (data) throw 'Already exist publicCode';
    DATA.push({ 
        'categoryId': params['categoryId'],
        'code1': params['code1'],
        'name1': params['name1'],
        'code2': params['code2'],
        'name2': params['name2']
    });
}

function update(params) {
    var data = selectOne(params);
    if (!data) throw 'Not exist publicCode';
    data['code1'] = params['code1'];
    data['name1'] = params['name1'];
    data['code2'] = params['code2'];
    data['name2'] = params['name2'];
}

function _delete(params) {
    var data = selectOne(params);
    if (!data) throw 'Not exist publicCode';
    var categoryId = data['categoryId'];
    DATA = DATA.filter((data) => data['categoryId'] !== categoryId);
}


module.exports = {
    'selectOne': selectOne,
    'select': select,
    'count': count,
    'insert': insert,
    'update': update,
    'delete': _delete
};
