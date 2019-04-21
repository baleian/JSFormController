import { Controller } from './Controller.js';


export class ListController extends Controller {

    constructor(selector) {
        super(selector);
        this._bodyTemplate = $(selector).find('[sip-body]').html();
    }

    load(datas) {
        var that = this;
        var body = $(this.selector).find('[sip-body]');
        body.html('');
        datas.forEach((data) => {
            var row = $(that._bodyTemplate);
            that.setQuery(row, data);
            body.append(row);
        });
        this.init(body);
        this.trigger('load', body.find('[sip-body-row]'));
    }

    clear() {
        this.load([]);
    }

    // setPages(count, limit, page) {
    //     page = page || 1;

    //     var pageNav = $(this.selector).find('[sip-page-nav]');
    //     if (!pageNav) return;
        
    //     var pageCount = 1;
    //     if (limit) {
    //         pageCount = Math.floor((parseInt(count) - 1) / parseInt(limit)) + 1;
    //     }

    //     var pageSelect = pageNav.find('select[sip-query=page]');
    //     if (pageSelect) {
    //         pageSelect.html('');
    //         for (var i = 1; i <= pageCount; i++) {
    //             pageSelect.append('<option value="' + i + '">' + i + '</option>');
    //         }
    //     }

    //     Utils.setQuery(pageNav, { 
    //         'count': count,
    //         'page': page,
    //         'pageCount': pageCount,
    //     });
    // }


    

    // load(query) {
    //     var that = this;
    //     query = $.extend(this.getSearchQuery(), query);
    //     this.service.getList(query, (err, datas) => {
    //         if (err) return that.trigger('load', err);

    //         var body = $(this.selector).find('[sip-body]');
    //         body.html('');
    //         datas.forEach((data) => {
    //             var row = $(that.bodyTemplate);
    //             Utils.setQuery(row, data);
    //             body.append(row);
    //         });

    //         var rows = $(this.selector).find('[sip-body-row]');
    //         rows.on('click', (event) => {
    //             var query = Utils.getQuery(event.currentTarget);
    //             that.trigger('sip-body-row:click', query, $(event.currentTarget), rows);
    //         });

    //         if (!this.service.getCount) {
    //             return that.trigger('load', null, rows);
    //         }
            
    //         this.service.getCount(query, (err, count) => {
    //             if (err) return that.trigger('load', err);

    //             var page = query['page'] || 1;
    //             var limit = query['limit'];
    //             var pageCount = 1;
    //             if (limit) {
    //                 pageCount = Math.floor((parseInt(count) + 1) / parseInt(limit)) + 1;
    //             }

    //             var pageNav = $(this.selector).find('[sip-page-nav]');
    //             if (pageNav) {
    //                 var pageSelect = pageNav.find('select[sip-query=page]');
    //                 if (pageSelect) {
    //                     pageSelect.html('');
    //                     for (var i = 1; i <= pageCount; i++) {
    //                         pageSelect.append('<option value="' + i + '">' + i + '</option>');
    //                     }
    //                 }
    //                 Utils.setQuery(pageNav, { 'pageCount': pageCount, 'page': page });
    //             }

    //             return that.trigger('load', null, rows);
    //         });
    //     });
    // }

}

