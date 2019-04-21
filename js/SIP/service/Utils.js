
export function filterParams(params, paramNames) {
    return paramNames.reduce((newParams, name) => {
        if (!params[name]) return newParams;
        newParams[name] = params[name];
        return newParams;
    }, {});
}


export function ajaxWrapper(query, callback) {
    console.log(query);
    query['success'] = function (res) { 
        callback(null, res); 
    };
    query['error'] = function (res) { 
        callback(res.responseText, res); 
    };
    $.ajax(query);
}
