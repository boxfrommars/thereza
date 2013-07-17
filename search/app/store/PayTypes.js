Ext.define('search.store.PayTypes', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    data: [
        {id: 1,    name: 'Dalek'},
        {id: 2,    name: 'Cyberman'},
        {id: 3,    name: 'Silurian'},
        {id: 4,    name: 'Sontaran'},
        {id: 5,    name: 'Racnoss'},
        {id: 6,    name: 'Weeping Angel'},
        {id: 7,    name: 'Ood'}
    ]
});