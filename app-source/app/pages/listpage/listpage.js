define(['mtemplate!app/pages/listpage/listpage.html', 
        'mtemplate!app/pages/listpage/pagenavbar.html',
        'basecontroller'],
	
function(template, navbarTemplate, BaseController){

BaseController.extend('Page.ListPage',
/* @Static */
{
	
},
/* @Prototype */
{
	template : template,
	
	getData : function(){
		return {
			issues : Model.Issue.findAll()
		}
		
	},
	preRender : function(options){
		
		options.attr('statusMap',  new can.Map({
			'todo' : options.issues.withStatus('todo'),
			'inprogress' : options.issues.withStatus('inprogress'),
			'done' : options.issues.withStatus('done')
		}));
	
	},

	renderNavbar : function(navbar){
		navbar.html(navbarTemplate(this.options));
	
		this.on(navbar.find('a#create-new'), 'click', function(ev){
			ev.stop();
			App.openPopup(Page.EditIssuePage, {})
		})
	},
	
	'.item-link click' : function(el,ev){
		ev.stop();
		App.openPage(Page.IssuePage, {issue : el.model()})
	},
	
	
	'{Model.Issue} statuschange' : function(Issue, ev, statusChange){
	
		var statusMap = this.options.statusMap;
		if(statusChange.from){
			var fromList = statusMap.attr(statusChange.from);
			fromList.remove(statusChange.issue);
		}
		if(statusChange.to){
			var toList = statusMap.attr(statusChange.to);
			toList.push(statusChange.issue);
		}
	}

});




})
