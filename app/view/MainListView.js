

Ext.define('WebApp.view.MainListView', {
	  extend: 'Ext.Container',
	alias: 'widget.mainList',
	
	
    config: {
	 style: ' background-color:white;',
        layout: 'vbox', 
        
		

        items: [
		    {
            xtype: 'list',
	    	flex: 1,    //  add a flex property
			
            id: 'contactList',
			emptyText: 'No Contacts in List!',

		// See complex XTemplates http://docs.sencha.com/touch/2-0/#!/api/Ext.XTemplate
		itemTpl: new Ext.XTemplate(
			'<span class="count">{First}</span>',
			' ',
			'<span class="unit">{Last}</span>',
			
			'<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;</div>'
		),
		store: 'contactStore'
		},
		
		
            {
                xtype: 'toolbar',
				title: 'Contact List',
                docked: 'top',
				    items: [
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'add',
                        text: 'Add'
                    }
                ]
            }
           
         
        ]
    }

});