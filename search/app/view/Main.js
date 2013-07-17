Ext.define('search.view.Main', {
    extend: 'Ext.panel.Panel',
    requires:[
        'Ext.layout.container.Border',
        'Ext.layout.container.Column',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.CheckboxGroup',
        'Ext.form.FieldSet',
        'Ext.toolbar.TextItem'
    ],
//    tools: [
//        {type:'plus'},
//    ],
//    title: 'Thereza',
    xtype: 'app-main',
    layout: 'border',
    defaults: {
        split: true,
        bodyPadding: 15,
        overflowY: 'auto'
    },
    items: [{
        region: 'center',
        xtype: 'panel',
        title: 'Поиск',
        items: [{
            xtype: 'form',
            buttons: [
                {
                    text   :'Искать'
                },
                {
                    text   : 'Сбросить'
                }
            ],
            layout: {
                type: 'vbox'
            },
            width: 650,
            defaults: {
                labelWidth: 150,
                width: 650
            },
            items: [{
                xtype: 'numberfield',
                name: 'num',
                fieldLabel: 'Номер дела'
            }, {
                xtype: 'textfield',
                name: 'lastname',
                fieldLabel: 'Фамилия'
            }, {
                xtype: 'combobox',
                name: 'id_category',
                fieldLabel: 'Категория',
                valueField: 'id',
                displayField: 'name',
                store: 'Categories',
                multiSelect: true,
                editable: false
            }, {
                xtype: 'textfield',
                name: 'address',
                fieldLabel: 'Адрес'
            }, {
                xtype: 'fieldset',
                collapsible: true,
                collapsed: true,
                layout: 'hbox',
                title: 'Постоянные выплаты',
                items: [{
                    flex:1,
                    defaults: {
                        xtype: 'checkbox'
                    },
                    xtype: 'checkboxgroup',
                    columns: 2,
                    items: [ // @TODO вынести в store
                        {boxLabel: 'Item 1'},
                        {boxLabel: 'Item 2'},
                        {boxLabel: 'Item 3'},
                        {boxLabel: 'Item 4'},
                        {boxLabel: 'Item 5'},
                        {boxLabel: 'Item 6'},
                        {boxLabel: 'Item 7'},
                    ]
                }, {
                    flex:1,
                    defaults: {
                        labelWidth: 150
                    },
                    items: [{
                        xtype: 'checkbox',
                        fieldLabel: 'Учитывать даты'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Дата начала'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Дата конца'
                    }]
                }]
            }, {
                xtype: 'fieldset',
                collapsible: true,
                collapsed: true,
                layout: 'hbox',
                title: 'Льготные категории',
                items: [{
                    flex:1,
                    defaults: {
                        xtype: 'checkbox'
                    },
                    xtype: 'checkboxgroup',
                    columns: 2,
                    items: [ // @TODO вынести в store
                        {boxLabel: 'Item 1'},
                        {boxLabel: 'Item 2'},
                        {boxLabel: 'Item 3'},
                        {boxLabel: 'Item 4'},
                        {boxLabel: 'Item 5'},
                        {boxLabel: 'Item 6'},
                        {boxLabel: 'Item 7'},
                    ]
                }, {
                    flex:1,
                    defaults: {
                        labelWidth: 150
                    },
                    items: [{
                        xtype: 'checkbox',
                        fieldLabel: 'Учитывать даты'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Дата начала'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Дата конца'
                    }]
                }]
            }, {
                xtype: 'numberfield',
                name: 'age',
                fieldLabel: 'Возраст'
            }, {
                xtype: 'numberfield',
                name: 'num',
                fieldLabel: 'Стаж'
            }]
        }]
    }, {
        region: 'south',
        xtype: 'panel',
        collapsible: true,
        title: 'Результат поиска',
        minHeight: 300
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        ui: 'footer',
        items: [{
            xtype: 'tbtext',
            text: 'Thereza'
        }, {
            xtype: 'component',
            flex: 1
        }, {
            xtype: 'splitbutton',
//            icon: 'add16',
            text: 'Отчёт',
            menu: [
                {text: '.xls'},
                {text: '.csv'}
            ]
        }, {
            xtype: 'splitbutton',
//            icon: 'add16',
            text: 'Выплаты',
            menu: [
                {text: '.xls'},
                {text: '.csv'}
            ]
        }, {
            xtype: 'button',
//            icon: 'add16',
            text: 'Добавить'
        }]
    }, {
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: [{
            xtype: 'tbtext',
            text: 'To Vera Gzhel with Love'
        }, {
            xtype: 'component',
            flex: 1
        }]
    }]
});