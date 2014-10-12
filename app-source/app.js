//The build will inline common dependencies into this file.

requirejs.config({

  paths: {
    'jquery':                   '../bower_components/jquery/dist/jquery',
    'can':						'../bower_components/canjs/amd/can',
    'framework7' : 				"../bower_components/framework7/dist/js/framework7",
    'text':						'../bower_components/text/text',
    'canjs-commons':			'app/canjs-commons',
    'mtemplate':				'app/canjs-commons/mustachetemplate',
    'basecontroller':			'app/canjs-commons/basecontroller',
    'canjsfm7-plugin':				'app/canjsfm7-plugin' 
    
    },
  shim: {
   
      'can': ['jquery'],
      'mtemplate' : ['jquery', 'can']
  }
});
define([
    
    'app/appcontrol'], function(){
	
});