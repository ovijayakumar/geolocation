({
    onAccountsLoaded : function(component, event, helper) {
        var accounts=event.getParam("accounts");
        var mapMarkers=[];
        for(i=0;i<=accounts.length;i++){
            var account=accounts[i];
            var mapMarker={
                'location':{
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description': (
                    'Phone: ' + account.Phone +
                    '<br/>' +
                    'Website: ' + account.Website
                ),
                'icon': 'standard:location'
            }
            mapMarkers.push(mapMarker);
        }
        component.set( 'v.mapMarkers', mapMarkers );
    }
})
