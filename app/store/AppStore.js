
Ext.define('WebApp.store.AppStore', {
    extend: 'Ext.data.Store',

    requires: [
        'WebApp.model.ContactData'
    ],

    config: {
        fields: ['First', 'Last'],
       data: Ext.device.Contacts.getContacts()
    }
});