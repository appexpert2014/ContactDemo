Ext.application({

name: 'WebApp',
models: ['ContactData'],
stores: ['AppStore'],
views: ['MainListView','AddContactView',],
controllers: ['AppController'],

launch: function() {

  Ext.create('WebApp.view.MainListView',{fullscreen: true});

}


});