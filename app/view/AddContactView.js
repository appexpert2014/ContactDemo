
Ext.define('WebApp.view.AddContactView', {
    extend: 'Ext.Container',
	alias: 'widget.contactView',

    config: {
	      id: 'contactdetail',
		name: 'contactdetail',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Contact Details',
				   items: [
                    {
                        xtype: 'button',
                        docked: 'left',
                        id: 'back',
                        text: 'back'
                    },
					{
                        xtype: 'button',
                        docked: 'right',
                        id: 'save',
                        text: 'Save'
                    }
					]
            },
            {
                xtype: 'formpanel',
                id: 'form',
				name: 'form',
                margin: 10,
                items: [
                    {
                        xtype: 'textfield',
                        docked: 'top',
                        id: 'fname',
                        label: 'First Name',
                        labelWidth: '40%',
                        name: 'fname'
                    },
                    {
                        xtype: 'textfield',
                        docked: 'top',
                        id: 'lname',
                        label: 'Last Name',
                        labelWidth: '40%',
                        name: 'lname'
                    },
                    {
                        xtype: 'numberfield',
                        docked: 'top',
                        id: 'phone',
                        label: 'Phone',
                        labelWidth: '40%',
                        name: 'phone'
                    },
                    {
                        xtype: 'textfield',
                        docked: 'top',
                        id: 'country',
                        label: 'Country',
                        labelWidth: '40%',
                        name: 'country'
                    },
                    {
                        xtype: 'textfield',
                        docked: 'top',
                        id: 'zip',
                        itemId: 'mytextfield4',
                        label: 'City/Code',
                        labelWidth: '40%',
                        name: 'zip'
                    },
                    {
                        xtype: 'textfield',
                        docked: 'top',
                        id: 'time',
                        label: 'TimeZone',
                        labelWidth: '40%',
                        name: 'time'
                    },
                    {
                        xtype: 'button',
                        docked: 'bottom',
                        id: 'save',
                        itemId: 'mybutton',
                        margin: 20,
                        text: 'Save'
                    }
                ]
            }
        ]
    },
	
		
	 initialize:function(){
                console.log(this);


            }

});