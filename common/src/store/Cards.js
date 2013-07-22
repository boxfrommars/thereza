Ext.define('Thereza.store.Cards', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name', 'address', 'birthdate', 'age', 'categories', 'passport_data', 'case_num', 'date_closed', 'date_last_pay'],
    data: [
        {id: 1, name: 'Donna Noble', address: 'Лондон, Даунинг-стрит, 10', birthdate: '1992-07-02', ages: 21, categories: '', passport_data: '03095555555', case_num: '223', 'date_closed': '2013-04-04', 'date_last_pay': '2013-02-19'},
        {id: 2, name: 'Martha Jones', address: 'Лондон, Даунинг-стрит, 10', birthdate: '1992-07-02', ages: 21, categories: '', passport_data: '03095555555', case_num: '224', 'date_closed': '2013-04-04', 'date_last_pay': '2013-02-19'},
        {id: 3, name: 'Jack Harkness', address: 'Лондон, Даунинг-стрит, 10', birthdate: '1992-07-02', ages: 21, categories: '', passport_data: '03095555555', case_num: '225', 'date_closed': '2013-04-04', 'date_last_pay': '2013-02-19'},
        {id: 4, name: 'Amy Pond', address: 'Лондон, Даунинг-стрит, 10', birthdate: '1992-07-02', ages: 21, categories: '', passport_data: '03095555555', case_num: '226', 'date_closed': '2013-04-04', 'date_last_pay': '2013-02-19'},
        {id: 5, name: 'Rory Williams', address: 'Лондон, Даунинг-стрит, 10', birthdate: '1992-07-02', ages: 21, categories: '', passport_data: '03095555555', case_num: '227', 'date_closed': '2013-04-04', 'date_last_pay': '2013-02-19'}
    ]
});