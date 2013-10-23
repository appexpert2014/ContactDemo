
Ext.define('WebApp.controller.AppController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
          listView: 'itemlist',
		 formEditor: '#form'
        },

        control: {
            "#save": {
                tap: 'onSaveTap'
            },
			"#add": {
                tap: 'onAddTap'
            },
			"#back": {
                tap: 'onBackTap'
            },
			"#contactList": {
				itemtap: 'onItemTapAction'
			},
			"#zip": {
				change: 'onZipChange'
			}
        }
    },

        onSaveTap: function(button, e, eOpts) {

var currentContact = this.getFormEditor().getRecord();
var newValue = this.getFormEditor().getValues();
console.log(currentContact);
console.log(newValue);	

currentContact.set("fname",newValue.fname);
currentContact.set("lname",newValue.lname);
currentContact.set("phone",newValue.phone);
currentContact.set("country",newValue.country);
currentContact.set("zip",newValue.zip);

var errors = currentContact.validate();

var message ='';
if(!errors.isValid()){


  Ext.each(errors.items,function(rec,i){
                                        message += rec.getField()+' ' + rec.getMessage()+"<br>";
                                    });
									currentContact.reject();
									console.log(message);
                                    Ext.Msg.alert("Validate", message, function(){});
                                    return false;
//currentNote.reject();
//alert(errors.getByfield("phone")[0].getMessage());
//return;
}

var contactStore = Ext.getStore("contactStore");

 if(null == contactStore.findRecord("id", currentContact.data.id)){
 contactStore.add(currentContact);
  }
contactStore.sync();
//var view = this.getListView() ? this.getListView() : Ext.create('WebApp.view.List');

	//	Ext.Viewport.setActiveItem(view);
Ext.Viewport.setActiveItem('mainList');
},

onAddTap: function() {
	var newNote = Ext.create("WebApp.model.ContactData");
	
Ext.Viewport.setActiveItem('contactView');
this.getFormEditor().setRecord(newNote);

	console.log(newNote);		
	},
	
	onItemTapAction: function(dataView, index, dataItem, record, eventObject, eOpts) {
	//	var view = this.getFormEditor() ? this.getFormEditor() : Ext.create('WebApp.view.AddContactView');

		
		Ext.Viewport.setActiveItem('contactView');
		this.getFormEditor().setRecord(record);
	},
	
	onWebServiceCall: function(newValue) {
		Ext.data.JsonP.request({
		
		 type: 'json',
		url: 'http://api.worldweatheronline.com/premium/v1/tz.ashx',
	
	 
	callbackKey: 'callback',
	
		 params: {
		key: 'rzv6waju43ku6feq6pcamdky',
	  
	  q: newValue,
	  
	  format: 'json'	
		
		},
		success: function(result) {


		

		var webdata = result;
//		Ext.decode(result.responseText);
	//		console.log(webdata.data.request[0].query);
//		console.log(webdata.data.request[0].type);
		
	//		console.log(webdata.data.time_zone[0].localtime);
	//	console.log(webdata.data.time_zone[0].utcOffset);
		
	//var query =	webdata.data.request[0].query;
//	var type  =	webdata.data.request[0].type;
		
var localtime =	webdata.data.time_zone[0].localtime;
//	var utcOffset =	webdata.data.time_zone[0].utcOffset;
		var view1 = Ext.getCmp('time');
		view1.setHtml(localtime);
		
		}
		
		
		
		});
	
	},
	
	
    onZipChange: function(textfield, newValue, oldValue, eOpts) {
        this.onWebServiceCall(newValue);
    },
	onBackTap: function() {
	Ext.Viewport.setActiveItem('mainList');	
	}

});