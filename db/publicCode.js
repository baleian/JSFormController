var categoryDB = require('./category');

var DATA = (function () {
    var DATA = [];
    var categories = categoryDB.select({ limit: 10000000 });

    for (var i = 1000; i <= 9999; i++) {
        var publicCode = 'A0' + i;
        var publicName = '테스트' + i;
        var category = categoryDB.selectOne({ categoryId: '9999' });
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

    return DATA;
})();


function selectOne(params) {
    return DATA.find((data) => data['publicCode'] === params['publicCode']);
}

function select(params) {
    var publicCode = params['publicCode'];
    var publicName = params['publicName'];
    var categoryId = params['categoryId'];
    var skip = parseInt(params['skip']) || 0;
    var limit = parseInt(params['limit']);
    return DATA
        .filter((data) => {
            if (publicCode && data['publicCode'] !== publicCode) return false;
            if (publicName && data['publicName'].indexOf(publicName) < 0) return false;
            if (categoryId && data['categoryId'] !== categoryId) return false;
            return true;
        })
        .sort((a, b) => { 
            return a['publicCode'] < b['publicCode'] ? -1 : 1; 
        })
        .slice(skip, skip + limit);
}

function count(params) {
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

function insert(params) {
    var data = selectOne(params);
    if (data) throw 'Already exist publicCode';
    DATA.push({ 
        'publicCode': params['publicCode'],
        'publicName': params['publicName'],
        'categoryId': params['categoryId']
    });
}

function update(params) {
    var data = selectOne(params);
    if (!data) throw 'Not exist publicCode';
    if (!categoryDB.selectOne(params)) throw 'Not acceptable categoryId';
    data['publicName'] = params['publicName'];
    data['categoryId'] = params['categoryId'];
}

function _delete(params) {
    var data = selectOne(params);
    if (!data) throw 'Not exist publicCode';
    var publicCode = data['publicCode'];
    DATA = DATA.filter((data) => data['publicCode'] !== publicCode);
}


module.exports = {
    'selectOne': selectOne,
    'select': select,
    'count': count,
    'insert': insert,
    'update': update,
    'delete': _delete
};
