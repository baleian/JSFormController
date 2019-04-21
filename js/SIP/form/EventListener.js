
export class EventListener {

    constructor() {
        this.listeners = {};
    }

    on(event, listener) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(listener);
    }

    trigger(event, ...args) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach((listener) => {
            listener.apply(this, args);
        });
    }

}
