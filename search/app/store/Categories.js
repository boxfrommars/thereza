Ext.define('search.store.Categories', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    data: [
        {id: 1,    name: 'Donna Noble'},
        {id: 2,    name: 'Martha Jones'},
        {id: 3,    name: 'Jack Harkness'},
        {id: 4,    name: 'Amy Pond'},
        {id: 5,    name: 'Rory Williams'}
    ]
});