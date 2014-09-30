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
	    {title : "Look over tests", description : 'We need to look into tests, right now there are none. I guess at least one test wouldnt hurt.', status : "todo", 
	    	comments : [{date : new Date(), text : 'We should look into this'}, {date : new Date(), text : 'We definitely should'}]},     	          		    
	    {title : "Get ready for Iphone and Android", description : 'Use phonegap and publish the app for Iphone and Android', status : "todo"},
	    {title : "Refactor the code", description : 'We need to refactor the code base', status : "inprogress"},
	    {title : "Post app on Framework7 forum", description : 'Post comment in the forum', status : "inprogress"}
	  ]);
	
	can.fixture({
		'GET /issue' : issueStore.findAll,
		'POST /issue' : issueStore.create,
		'PUT /issue/{id}' : issueStore.update
	})
	
	
})