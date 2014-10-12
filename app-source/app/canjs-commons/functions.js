define(['jquery',
        'can'],
        function($, can){

	var functions = {
			jsonajax : function(request){
				return $.ajax({
					url: request.url,
					processData: false,
					data: JSON.stringify(request.data),
					dataType: request.dataType || 'json',
					contentType:'application/json',
					type: request.type || 'POST'		  
				});
			},
			dfdMap : function(data){
				var dfdMap = $.Deferred();
				var deffereds_array = [];
				var keys_array = [];
				$.map(data, function(dfd, key) {
					deffereds_array.push(dfd);
					keys_array.push(key);
				});
				$.when.apply(null, deffereds_array).done(function(){
					var args = arguments;
					var result = {};
					$.each(args, function(i,e){

						var key = keys_array[i];
						if(key){
							result[key] = e;
						}
					});

					dfdMap.resolve(result);
				}).fail(function(a,b,c){
					dfdMap.reject();
				});

				return dfdMap;
			}
	}




	return functions;

})