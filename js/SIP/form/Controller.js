import { EventListener } from './EventListener.js';


export class Controller extends EventListener {

    constructor(selector) {
        super();
        this._selector = selector;
        this.init(this._selector);
    }

    get selector() { 
        return this._selector; 
    }

    init(selector) {
        var that = this;

        $(selector).find('[sip-search-btn]').on('click', (event) => {
            that.trigger('search', that.getQuery($(event.currentTarget).closest('[sip-search]')));
        });

        $(selector).find('[sip-search] input').on('keydown', (event) => {
            if (event.keyCode !== 13) return;
            that.trigger('search', that.getQuery($(event.currentTarget).closest('[sip-search]')));
        });

        $(selector).find('[sip-add-btn]').on('click', (event) => {
            that.trigger('add', that.getQuery($(event.currentTarget).closest('[sip-add]')));
        });

        $(selector).find('[sip-edit-btn]').on('click', (event) => {
            that.trigger('edit', that.getQuery($(event.currentTarget).closest('[sip-edit]')));
        });

        $(selector).find('[sip-delete-btn]').on('click', (event) => {
            that.trigger('delete', that.getQuery($(event.currentTarget).closest('[sip-delete]')));
        }); 
    }

    getQuery(selector) {
        return $(selector).find('[sip-query]').toArray()
            .reduce((query, element) => {
                var key = $(element).attr('sip-query');
                var value = $(element).val() || $(element).text();
                if (value) {
                    query[key] = value;
                }
                return query;
            }, {});
    }

    setQuery(selector, data) {
        for (var k in data) {
            $(selector).find('input[sip-query=' + k + ']').val(data[k]);
            $(selector).find('select[sip-query=' + k + ']').val(data[k]);
            $(selector).find('[sip-query=' + k + ']').not('input, select').text(data[k]);
        }
    }

    clearQuery(selector) {
        $(selector).find('input[sip-query]').val('');
        $(selector).find('select[sip-query]').val('');
        $(selector).find('[sip-query]').not('input, select').text('');
    }

    getSearchQuery() {
        return this.getQuery($(this.selector).find('[sip-search]'));
    }

    clearSearchQuery() {
        this.clearQuery($(this.selector).find('[sip-search]'));
    }

    getAddQuery() {
        return this.getQuery($(this.selector).find('[sip-add]'));
    }

    clearAddQuery() {
        this.clearQuery($(this.selector).find('[sip-add]'));
    }

}