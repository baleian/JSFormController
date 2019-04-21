import * as Utils from './Utils.js';


export function get(params, callback) {
    var paramNames = ['categoryId'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/category/get',
        'type': 'POST',
        'data': params
    }, callback);
}


export function add(params, callback) {
    var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/category/add',
        'type': 'POST',
        'data': params
    }, callback);
}


export function edit(params, callback) {
    var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/category/edit',
        'type': 'POST',
        'data': params
    }, callback);
}


export function remove(params, callback) {
    var paramNames = ['categoryId'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/category/delete',
        'type': 'POST',
        'data': params
    }, callback);
}


export function getCount(params, callback) {
    var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/category/count',
        'type': 'POST',
        'data': params
    }, callback);
}


export function getList(params, callback) {
    var paramNames = ['categoryId', 'code1', 'name1', 'code2', 'name2', 'page', 'limit'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/category/list',
        'type': 'POST',
        'data': params
    }, callback);
}
