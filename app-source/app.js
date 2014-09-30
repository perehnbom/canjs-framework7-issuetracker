//The build will inline common dependencies into this file.

requirejs.config({

  paths: {
    'jquery':                   '../bower_components/jquery/dist/jquery',
    'can':						'../bower_components/canjs/amd/can',
    'framework7' : 				"../bower_components/framework7/dist/js/framework7",
    'text':						'../bower_components/text/text',
    
    'canjs-commons':			'../bower_components/canjs-commons/canjs-commons',
    //'canjs-commons':			'../../canjs-commons/canjs-commons',
    
    'mtemplate':				'../bower_components/canjs-commons/canjs-commons/mustachetemplate',
    'basecontroller':			'../bower_components/canjs-commons/canjs-commons/basecontroller',
    'canjsfm7-plugin':				'app/canjsfm7-plugin'
    //'framework7-canjsplugin':	'../../canjs-commons/canjs-commons/fm7-plugin/framework7-canjsplugin',
    
    
    },
  shim: {
   
      'can': ['jquery'],
      'mtemplate' : ['jquery', 'can']
  }
});
define([
    
    'app/appcontrol'], function(){
	
});