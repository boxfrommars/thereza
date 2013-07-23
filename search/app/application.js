Ext.define('search.Application', {
    name: 'search',

    namespaces: ['Thereza'],
    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    refs: [{
        ref: 'benefitCategoriesList',
        selector: '#search-form-benefitCategoriesList'
    }],

    init: function() {
        this.control({
            '#search-card-form button[action=search]': { click: this.searchCards }
        });

        this.getStore('Thereza.store.BenefitCategories').on('load', function(store){
            store.each(function(record, id){
                this.addFormBenefitCategory(record);
            }, this);
        }, this);
    },

    addFormBenefitCategory: function(record) {
        this.getBenefitCategoriesList().add({
            xtype: 'checkbox',
            boxLabel: record.get('name'),
            inputValue: record.get('id')
        });
    },

    searchCards: function(btn){
        var form = btn.up('form').getForm();
        if (form.isValid()) {
            this.getStore('Thereza.store.Cards').load({
                params: form.getValues(null, true)
            });
        }
    },

    stores: [
        'Categories',
        'PayTypes',
        'Thereza.store.Cards',
        'Thereza.store.BenefitCategories'
    ]
});
