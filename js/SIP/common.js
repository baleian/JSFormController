
module('EventListener', () => {
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

	return EventListener;
});