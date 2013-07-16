Ext.define('search.view.Main', {
    extend: 'Ext.panel.Panel',
    requires:[
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.layout.container.Border',
        'Ext.toolbar.TextItem'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: [
            { xtype: 'tbtext', text: 'To Vera Gzhel with Love' },
            { xtype: 'component', flex: 1 }
        ]
    }, {
        xtype: 'toolbar',
        dock: 'top',
        ui: 'footer',
        items: [
            { xtype: 'tbtext', text: 'Thereza 2' },
            { xtype: 'component', flex: 1 },
            { xtype: 'button', text: 'wapa' }
        ]
    }],
    items: [{
        region: 'center',
        xtype: 'panel',
        title: 'Поиск',
        items: [{
            xtype: 'form',
            layout: {
                type: 'vbox',       // Arrange child items vertically
                padding: 5
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Имя'
                }
            ]
        }]
    }, {
        region: 'south',
        height: 300,
        xtype: 'panel',
        title: 'Результат поиска'
    }]
});