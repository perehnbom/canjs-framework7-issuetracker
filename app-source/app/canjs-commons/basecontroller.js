
define(['can', 'canjs-commons/functions', 'jquery', 'can/construct/super'],
function(can, Functions, $) {
	

	
	return can.Control.extend({
		
	},{
	
	init: function( element , options ){
		
	},
	

	render : function(){
		var self = this;
		return this._preRenderPhase().done(function(){
			self._postRenderPhase();
		})
	},

	_preRenderPhase : function(){
		var controller = this;
		

		var element = controller.element;
		var dfd = $.Deferred();

		var dataDFD = controller.getData() || {};


		$.when(Functions.dfdMap(dataDFD)).done(function(data){
			if(!controller.element){
				dfd.fail();
				return;
			}

			can.extend(controller.options, data);
			controller.options = new can.Map(controller.options);
			$.when(controller.preRender(controller.options)).done(function(){

				
				dfd.resolve();
			})


		}).fail(function(){
		
			dfd.fail();
		});
		return dfd.promise();
	},

	_postRenderPhase : function(){
		var controller = this, element = this.element;
		
		element.html(controller.template(controller.options));
		
		controller.postRender(controller.options);
		element.addClass('controller');
		element.trigger('rendered');
		
	},
	

	reRender : function(){


		return this.render();
	},

	getData : function(){
		return {}
	},
	preRender : function(data){

	},

	postRender : function(data){

	},
	
	destroy: function() {
		if(this.element){
			this.element.removeClass('controller');
		}

	    this._super();

	}

});
	

});


