Ext.define('search.Application', {
    name: 'search',

    namespaces: ['Thereza'],
    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    stores: [
        'Categories',
        'PayTypes',
        'Thereza.store.Cards'
    ]
});
