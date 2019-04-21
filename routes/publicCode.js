var express = require('express');
var router = express.Router();

var catgegoryDB = require('../db/category');
var publicCodeDB = require('../db/publicCode');


router.post('/get', (req, res) => {
    var params = req.body;
    var publicCode = params['publicCode'];
    if (!publicCode) {
        return res.status(400).send('Required check fail');
    }
    res.send(publicCodeDB.selectOne(params));
});

router.post('/add', (req, res) => {
    var params = req.body;
    var publicCode = params['publicCode'];
    var publicName = params['publicName'];
    var categoryId = params['categoryId'];
    if (!publicCode || !publicName || !categoryId) {
        return res.status(400).send('Required check fail');
    }
    var categoryVO = catgegoryDB.selectOne(params);
    if (!categoryVO) {
        return res.status(406).send('Not acceptable categoryId');
    }
    var publicCodeVO = publicCodeDB.selectOne(params);
    if (publicCodeVO) if (!categoryVO) {
        return res.status(406).send('Already exist publicCode');
    }
    publicCodeDB.insert(params);
    res.send('SUCCESS');
});

router.post('/edit', (req, res) => {
    var params = req.body;
    var publicCode = params['publicCode'];
    var publicName = params['publicName'];
    var categoryId = params['categoryId'];
    if (!publicCode || !publicName || !categoryId) {
        return res.status(400).send('Required check fail');
    }
    var categoryVO = catgegoryDB.selectOne(params);
    if (!categoryVO) {
        return res.status(406).send('Not acceptable categoryId');
    }
    var publicCodeVO = publicCodeDB.selectOne(params);
    if (!publicCodeVO) {
        return res.status(406).send('Not exist publicCode');
    }
    publicCodeDB.update(params);
    res.send('SUCCESS');
});

router.post('/delete', (req, res) => {
    var params = req.body;
    var publicCode = params['publicCode'];
    if (!publicCode) {
        return res.status(400).send('Required check fail');
    }
    var publicCodeVO = publicCodeDB.selectOne(params);
    if (!publicCode) {
        return res.status(406).send('Not exist publicCode');
    }
    publicCodeDB.delete(params);
    res.send('SUCCESS');
});

router.post('/count', (req, res) => {
    var params = req.body;
    res.send('' + publicCodeDB.count(params));
});

router.post('/list', (req, res) => {
    var params = req.body;
    var page = params['page'] || 1;
    var limit = params['limit'] || 1000;
    params['skip'] = (page - 1) * limit;
    params['limit'] = limit;
    res.send(publicCodeDB.select(params));
});


module.exports = router;
