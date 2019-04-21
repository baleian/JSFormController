import { Controller } from './Controller.js';

export class PageNavigator extends Controller {
    
    constructor(selector, limit) {
        super(selector);
        this._count = 0;
        this._limit = limit;
        this._page = 0;
        this._pageCount = 0;
        
        this._init();
    }

    get limit() { return this._limit; }
    set limit(limit) { this._limit = parseInt(limit); this.trigger('limit:change', this.limit); }
    
    get count() { return this._count; }
    set count(count) { this._count = parseInt(count); this.trigger('count:change', this.count); }
    
    get page() { return this._page; }
    set page(page) { this._page = parseInt(page); this.trigger('page:change', this.page); }
    
    get pageCount() { return this._pageCount; }
    set pageCount(pageCount) { this._pageCount = parseInt(pageCount); this.trigger('pageCount:change', this.pageCount); }


    _init() {
        var that = this;

        this.on('limit:change', (limit) => {
            that.setQuery($(that.selector), { 'limit': limit });
            that.pageCount = (that.count - 1) / that.limit + 1;
        });

        this.on('count:change', (count) => {
            that.setQuery($(that.selector), { 'count': count });
            that.pageCount = (that.count - 1) / that.limit + 1;
        });

        this.on('page:change', (page) => {
            that.setQuery($(that.selector), { 'page': page });
        });

        this.on('pageCount:change', (pageCount) => {
            that.setQuery($(that.selector), { 'pageCount': pageCount });
        });
    }

}