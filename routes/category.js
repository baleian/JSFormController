var express = require('express');
var router = express.Router();

var categoryDB = require('../db/category');


router.post('/get', (req, res) => {
    var params = req.body;
    var categoryId = params['categoryId'];
    if (!categoryId) {
        return res.status(400).send('Required check fail');
    }
    res.send(categoryDB.selectOne(params));
});

router.post('/add', (req, res) => {
    var params = req.body;
    var categoryId = params['categoryId'];
    var code1 = params['code1'];
    var name1 = params['name1'];
    var code2 = params['code2'];
    var name2 = params['name2'];
    if (!categoryId || !code1 || !name1 || !code2 || !name2) {
        return res.status(400).send('Required check fail');
    }
    var categoryVO = categoryDB.selectOne(params);
    if (categoryVO) {
        return res.status(406).send('Already exist categoryId');
    }
    res.send('SUCCESS');
});

router.post('/edit', (req, res) => {
    var params = req.body;
    var categoryId = params['categoryId'];
    var code1 = params['code1'];
    var name1 = params['name1'];
    var code2 = params['code2'];
    var name2 = params['name2'];
    if (!categoryId || !code1 || !name1 || !code2 || !name2) {
        return res.status(400).send('Required check fail');
    }
    var categoryVO = categoryDB.selectOne(params);
    if (!categoryVO) {
        return res.status(406).send('Not exist category');
    }
    res.send('SUCCESS');
});

router.post('/delete', (req, res) => {
    var params = req.body;
    var categoryId = params['categoryId'];
    if (!categoryId) {
        return res.status(400).send('Required check fail'); 
    }
    var categoryVO = categoryDB.selectOne(params);
    if (!categoryVO) {
        return res.status(406).send('Not exist category');
    }
    res.send('SUCCESS');
});

router.post('/count', (req, res) => {
    var params = req.body;
    res.send('' + categoryDB.count(params));
});

router.post('/list', (req, res) => {
    var params = req.body;
    var page = params['page'] || 1;
    var limit = params['limit'] || 1000;
    params['skip'] = (page - 1) * limit;
    params['limit'] = limit;
    res.send(categoryDB.select(params));
});


module.exports = router;
