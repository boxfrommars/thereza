// @TODO разбить на отдельные виды для формы и грида
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
        'Ext.toolbar.TextItem',
        'Ext.grid.Panel',
        'Ext.grid.column.Date'
    ],
//    tools: [
//        {type:'plus'},
//    ],
//    title: 'Thereza',
    xtype: 'app-main',
    layout: 'border',
    defaults: {
        split: true,
        overflowY: 'auto'
    },
    items: [{
        region: 'north',
        collapsible: true,
        xtype: 'panel',
        title: 'Поиск',
        bodyPadding: 15,
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
                        {boxLabel: 'Item 7'}
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
                        fieldLabel: 'Дата начала',
                        editable: false
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Дата конца',
                        editable: false
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
                        {boxLabel: 'Item 7'}
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
                        fieldLabel: 'Дата начала',
                        editable: false
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Дата конца',
                        editable: false
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
        region: 'center',
        xtype: 'gridpanel',
        title: 'Результат поиска',
        store: 'Persons',

        columns: [{
            header: "№ дела",
            flex: 1,
            sortable: true,
            dataIndex: 'case_num'
        }, {
            header: "ФИО",
            flex: 3,
            sortable: true,
            dataIndex: 'name'
        }, {
            header: "Дата рождения",
            flex: 2,
            sortable: true,
            xtype: 'datecolumn',
            dataIndex: 'birthdate'
        }, {
            header: "Возраст",
            flex: 1,
            sortable: true,
            dataIndex: 'age'
        }, {
            header: "Льготные категории",
            flex: 3,
            sortable: true,
            dataIndex: 'categories'
        }, {
            header: "Адрес",
            flex: 3,
            sortable: true,
            dataIndex: 'address'
        }, {
            header: "Паспортные данные",
            flex: 3,
            sortable: true,
            dataIndex: 'passport_data'
        }, {
            header: "Дата закрытия",
            flex: 2,
            sortable: true,
            xtype: 'datecolumn',
            dataIndex: 'date_closed'
        }, {
            header: "Последняя выплата",
            flex: 3,
            sortable: true,
            xtype: 'datecolumn',
            dataIndex: 'date_last_pay'
        }],

        loadMask: true,

        viewConfig: {
            stripeRows: true
        },
//        bbar: pagingBar,
        tbar: [
            '->',
            {
                xtype: 'triggerfield',
                trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'
            }
        ]
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
            text: 'Отчёт',
            menu: [
                {text: '.xls'},
                {text: '.csv'}
            ]
        }, {
            xtype: 'splitbutton',
            text: 'Выплаты',
            menu: [
                {text: '.xls'},
                {text: '.csv'}
            ]
        }, {
            xtype: 'button',
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