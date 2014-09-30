define(['can'],
function(can){


can.Model.extend('Model.Issue',
/* @Static */
{
	findAll : 'GET /issue',
	create  : 'POST /issue',
	update  : 'PUT /issue/{id}',
},
/* @Prototype */
{
	
	status : 'todo',
	comments : [],
	
	init : function(){
		this.backup();
	},
	
	addComment : function(comment){
		this.comments.push(comment);
	},
	
	save : function(){
		var self = this, statusChange;
		if(this.id == null){ // If new created
			statusChange = {to: this.status};
		}
		return this._super().done(function(){
			
			statusChange = statusChange || {
				from : self._backupStore.status,
				to : self.status
			}
			
			self.backup();
			if(statusChange.from != statusChange.to){
				statusChange.issue = self;
				can.trigger(Model.Issue, 'statuschange', statusChange);
			}
			
		})
	},
	restore : function(){
		this._super();
	},
	
	nextStatus : function(){
		switch(this.attr('status')){
			case 'todo': return 'inprogress';
			case 'inprogress': return 'done';
			case 'done': return null;
		}
	}
});


Model.Issue.List = Model.Issue.List.extend({
	
}, {
	withStatus : function(status) {
		return this.grep(function(issue) {
			return issue.status == status;
		});
	}
})

})
