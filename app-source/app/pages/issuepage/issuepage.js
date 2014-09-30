define(['mtemplate!app/pages/issuepage/issuepage.html', 
        'mtemplate!app/pages/issuepage/pagenavbar.html',
        'basecontroller'],
	
function(template, navbarTemplate, BaseController){

BaseController.extend('Page.IssuePage',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	preRender : function(options){
		options.attr('newComment', new Model.Comment());
	},
	
	renderNavbar : function(navbar){
		var self = this;
		navbar.html(navbarTemplate(this.options));
		
		this.on(navbar.find('a#edit'), 'click', function(ev){
			ev.stop();
			App.openPopup(Page.EditIssuePage, {issue : self.options.issue})
		})
	},
	'a#post-comment click' : function(el,ev){
		ev.stop();
		var comment = this.options.newComment;
		comment.attr('date', new Date());
		this.options.issue.addComment(comment);
		
		this.options.attr('newComment',new Model.Comment());
	},
	'a#move-to-next-status click' : function(el,ev){
		ev.stop();
		var issue = this.options.issue;
		issue.attr('status', issue.nextStatus());
		issue.save();
	}
	
	

});



})
