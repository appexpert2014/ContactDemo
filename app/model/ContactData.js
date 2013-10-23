
Ext.define('WebApp.model.ContactData', {
    extend: 'Ext.data.Model',
requires: ['Ext.data.identifier.Uuid'],
    config: {
	identifier : 'uuid',
        fields: [
		 
            {
                name: 'fname'
            },
            {
                name: 'lname'
            },
            {
                name: 'phone'
            },
            {
                name: 'country'
            },
            {
                name: 'zip'
            },
            {
                name: 'time'
            }
        ],
        validations: [
		    {
                type: 'presence',
                field: 'fname',
				name: 'First Name'
            }
			,
			{ type: 'format',
			field: 'fname', 
			name: 'First Name',
			matcher: /^[a-zA-Z]/},
            {
                type: 'presence',
                field: 'lname',
				name: 'Last Name'
            }
			,
			{ type: 'format', field: 'lname',
			name: 'Last Name',
			matcher: /^[a-zA-Z]/},
            {
                type: 'length',
                field: 'phone',
                max: 14,
                min: 6,
				name: 'Phone'
            },
			{ type: 'format', field: 'phone',name: 'Phone', matcher: /[0-9]{1,20}/},
         
            {
                type: 'presence',
                field: 'zip',
				name: 'City/ Code'
            }
			
        ]
    }
});