Ext.define('WebApp.view.ContList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contlist',
	requires: ["Ext.plugin.ListPaging"],
    config: {
        loadingText: 'Loading Contacts...',
        store: 'contactStore',
		plugins: [
			{
				xclass: "Ext.plugin.ListPaging",
				autoPaging: false
			}
		],
        onItemDisclosure: true,
        itemTpl: [
            '<div class="name">',
            '<span class="critics">First Name: {fname}%</span>',
            '<span class="audience">Last Name: {lname}%</span>',
            '</div>'
        ]
    }

});