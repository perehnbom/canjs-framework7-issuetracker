define(['can/util/fixture'],
function(){
	can.fixture.delay = 0;
	
	var initStore = function(itemArray){
		var store = can.fixture.store(itemArray.length, function(i){
		    var item = itemArray[i];
		    if(item == null){
		    	return {};
		    }
		    if(item.id == null){
		    	item.id = i;
		    }
		    return item;
		
		})
		return store;
	}
	
	
	var issueStore = initStore([
	    {title : "Test in Android browser", description : 'Test the app on chrome in Android', status : "todo", 
	    	comments : [{date : new Date(), text : 'We should look into this'}, {date : new Date(), text : 'We definitely should'}]},     	          		    
	    {title : "Get ready for Iphone and Android", description : 'Use phonegap and publish the app for Iphone and Android', status : "todo"},
	
	    {title : "Post app on Framework7 forum", description : 'Post comment in the forum', status : "inprogress"},
	    {title : 'Setup production build', description : 'Setup a build with RequireJS. Should result in a minified app.js and main.css', status : 'done', comments : [{date : new Date(2014, 8, 29), text: 'Done. use grunt build'}]}
	  ]);
	
	can.fixture({
		'GET /issue' : issueStore.findAll,
		'POST /issue' : issueStore.create,
		'PUT /issue/{id}' : issueStore.update
	})
	
	
})