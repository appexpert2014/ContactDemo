Ext.define('WebApp.view.List', {
	extend: 'Ext.List',
	alias: 'widget.itemlist',

	xtype: 'itemlist',
	requires: ['Ext.TitleBar'],

	config: {
		emptyText: 'No shopping items in list!',

		// See complex XTemplates http://docs.sencha.com/touch/2-0/#!/api/Ext.XTemplate
		itemTpl: new Ext.XTemplate(
			'<span class="count">{fname}</span>',
			'<span class="unit">{lname}</span>',
			'- {lname}',
			'<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;</div>'
		),
		store: 'contactStore'
	}
});