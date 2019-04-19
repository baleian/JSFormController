/*
Global public definition
*/
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


var SIP = SIP || {};

(function (SIP) {

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
		callbacks.forEach((callback) => {
			if (args.length > 0) {
				return callback(args);
			}
			callback();
		});
	}


	function SipListController(selector, service) {
		var that = this;
		EventListener.call(this);
		this.selector = selector;
		this.service = service;
		this.bodyTemplate = $(selector).find('[sip-body]').html();
		this.limit = 20;
		this.init();
	}

	SipListController.prototype = Object.create(EventListener.prototype);

	SipListController.prototype.constructor = SipListController

	SipListController.prototype.init = function () {
		var that = this;

		$(this.selector).find('[sip-search]')

		this.trigger('init');
	}

	SipListController.prototype.load = function () {
		var that = this;
		this.service.getList(getQuery('[sip-search]'), (err, datas) => {
			if (err) { 
				return that.trigger('loaded', err);
			}
			var body = $(that.selector).find('[sip-body]');
			body.html('');
			datas.forEach((data) => {
				var row = $(that.bodyTemplate);
				setQuery(row, data);
				for (var k in data) {
					row.find('input[sip-query=' + k + ']').val(data[k]);
					row.find('[sip-query=' + k + ']').not('input').text(data[k]);
				}
				body.append(row);
			});
			that.trigger('loaded');
		})
	}



	SIP.getQuery = function (selector) {
		var query = $(selector)
			.find('[sip-query]')
			.toArray()
			.reduce((query, element) => {
				var key = $(element).attr('sip-query');
				var value = $(element).val() || $(element).text();
				query[key] = value;
				return query
			}, {});
		return query;
	}

	SIP.setQuery = function (selector, data) {
		for (var k in data) {
			$(selector).find('input[sip-query=' + k + ']').val(data[k]);
			$(selector).find('[sip-query=' + k + ']').not('input').text(data[k]);
		}
	}

	SIP.clearQuery = function (selector) {
		$(selector)
			.find('[sip-query]')
			.each((index, element) => {
				$(element).val('');
			});
	}

	SIP.SipListController = SipListController;

})(SIP);








