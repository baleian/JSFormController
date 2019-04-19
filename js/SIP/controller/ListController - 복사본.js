(function (module) {

	function ListController(selector, service) {
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


	module.Controller = module.Controller || {};
	
	module.Controller.ListController = ListController;

})(SIP);