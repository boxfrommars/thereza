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
        'Ext.form.RadioGroup',
        'Ext.form.FieldSet',
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Paging',
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
            id: 'search-card-form',
            buttons: [{
                text: 'Искать',
                action: 'search'
            }, {
                text: 'Сбросить',
                handler: function() {
                    this.up('form').getForm().reset();
                }
            }],
            layout: {
                type: 'vbox'
            },
            width: 700,
            defaults: {
                labelWidth: 150,
                width: 700
            },
            items: [{
                xtype: 'textfield',
                name: 'card_uid',
                fieldLabel: 'Номер дела'
            }, {
                xtype: 'textfield',
                name: 'last_name',
                fieldLabel: 'Фамилия'
            }, {
                xtype: 'textfield',
                name: 'address',
                fieldLabel: 'Адрес'
            }, {
                xtype: 'fieldset',
                collapsible: true,
                collapsed: true,
                layout: 'hbox',
                title: 'Выплаты',
                items: [{
                    flex:1,
                    defaults: {
                        xtype: 'checkbox',
                        name: 'ma_id'
                    },
                    xtype: 'checkboxgroup',
                    columns: 2,
                    items: []
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
                        name: 'mas_date_from',
                        fieldLabel: 'Дата начала',
                        editable: false
                    }, {
                        xtype: 'datefield',
                        name: 'mas_date_to',
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
                    xtype: 'checkboxgroup',
                    id: 'search-form-benefitCategoriesList',
                    flex:1,
                    defaults: {
                        xtype: 'checkbox',
                        name: 'bnf_id'
                    },
                    columns: 2,
                    items: []
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
                        name: 'bnfs_date_from',
                        fieldLabel: 'Дата начала',
                        editable: false
                    }, {
                        xtype: 'datefield',
                        name: 'bnfs_date_to',
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
                name: 'w_exp',
                fieldLabel: 'Стаж'
            }, {
                xtype: 'fieldset',
                title: 'Модификаторы',
                items: [{
                    defaults: {
                        xtype: 'checkbox',
                        name: 'search_type'
                    },
                    xtype: 'checkboxgroup',
                    items: [{
                        boxLabel: 'В найденном',
                        inputValue: 'in'
                    }, {
                        boxLabel: 'Исключить найденное',
                        inputValue: 'exclude'
                    }, {
                        boxLabel: 'В удалённых',
                        inputValue: 'deleted'
                    }, {
                        boxLabel: 'В закрытых',
                        inputValue: 'closed'
                    }]
                }]
            }]
        }]
    }, {
        region: 'center',
        xtype: 'gridpanel',
        title: 'Результат поиска',
        store: 'Thereza.store.Cards',

        columns: [{
            header: "№ дела",
            flex: 1,
            sortable: true,
            dataIndex: 'card_uid'
        }, {
            header: "ФИО",
            flex: 3,
            sortable: true,
            dataIndex: 'fio'
        }, {
            header: "Дата рождения",
            flex: 2,
            sortable: true,
            dataIndex: 'birth_date'
        }, {
            header: "Возраст",
            flex: 1,
            sortable: true,
            dataIndex: 'age'
        }, {
            header: "Льготные категории",
            flex: 3,
            sortable: true,
            dataIndex: 'benefits_text'
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
            dataIndex: 'last_close_date'
        }, {
            header: "Последняя выплата",
            flex: 3,
            sortable: true,
            dataIndex: 'last_material_assistance'
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
        ],
        bbar: {
            xtype: 'pagingtoolbar',
            store: 'Thereza.store.Cards',
            displayInfo: true
        }
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