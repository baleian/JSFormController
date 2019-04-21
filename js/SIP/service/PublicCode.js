import * as Utils from './Utils.js';


export function get(params, callback) {
    var paramNames = ['publicCode'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/publicCode/get',
        'type': 'POST',
        'data': params
    }, callback);
}


export function add(params, callback) {
    var paramNames = ['publicCode', 'publicName', 'categoryId'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/publicCode/add',
        'type': 'POST',
        'data': params
    }, callback);
}


export function edit(params, callback) {
    var paramNames = ['publicCode', 'publicName', 'categoryId'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/publicCode/edit',
        'type': 'POST',
        'data': params
    }, callback);
}


export function remove(params, callback) {
    var paramNames = ['publicCode'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/publicCode/delete',
        'type': 'POST',
        'data': params
    }, callback);
}


export function getCount(params, callback) {
    var paramNames = ['publicCode', 'publicName', 'categoryId'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/publicCode/count',
        'type': 'POST',
        'data': params
    }, callback);
}


export function getList(params, callback) {
    var paramNames = ['publicCode', 'publicName', 'categoryId', 'page', 'limit'];
    params = Utils.filterParams(params, paramNames);
    Utils.ajaxWrapper({
        'url': '/publicCode/list',
        'type': 'POST',
        'data': params
    }, callback);
}
