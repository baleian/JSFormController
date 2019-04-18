var SIP = SIP || {};


String.prototype.format = function () {
	var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}

function filterParams(params, paramNames) {
	return paramNames
		.reduce((filtered, name) => {
			filtered[name] = params[name];
		}, {});
}

function requiredCheck(params, paramNames) {
	return paramNames.every((name) => {
		return params[name];
	});
}



function EventListener() {
	this.eventListener = {};
}

EventListener.prototype.on = function (event, callback) {
	this.eventListener[event] = this.eventListener[event] || [];
	this.eventListener[event].push(callback);
}

EventListener.prototype.off = function (event) {
	delete this.eventListener[event];
}

EventListener.prototype.trigger = function(event, ...args) {
	var	callbacks = this.eventListener[event] || [];
	callbacks.forEach((callback) => callback(args));
}



function SipListController(selector, service) {
	var that = this;
	EventListener.call(this);
	this.selector = selector;
	this.service = service;
	this.bodyTemplate = $(selector).find('[sip-body]').html();
	this.limit = 20;

	this.getQuery = function () {
		var query = $(that.selector)
			.find('[sip-search] [sip-query]')
			.toArray()
			.reduce((query, element) => {
				var key = $(element).attr('sip-query');
				var value = $(element).val() || $(element).text();
				query[key] = value;
				return query
			}, {});
		
		query['limit'] = query['limit'] || that.limit;
		return query;
	}

	this.clearQuery = function () {
		$(that.selector)
			.find('[sip-search] [sip-query]')
			.each((index, element) => {
				$(element).val('');
			});
	}

}

SipListController.prototype = Object.create(EventListener.prototype);

SipListController.prototype.constructor = SipListController

SipListController.prototype.load = function () {
	var that = this;
	this.service.getList(this.getQuery(), (err, datas) => {
		if (err) { 
			return that.trigger('loaded', err);
		}
		var body = $(that.selector).find('[sip-body]');
		body.html('');
		datas.forEach((data) => {
			var row = $(that.bodyTemplate);
			for (var k in data) {
				row.find('input[sip-query=' + k + ']').val(data[k]);
				row.find('[sip-query=' + k + ']').not('input').text(data[k]);
			}
			body.append(row);
		});
		that.trigger('load');
	})
}
