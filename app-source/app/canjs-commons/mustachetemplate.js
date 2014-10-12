/**
 * Modded version of stache:
 * https://github.com/jfparadis/requirejs-mustache/blob/master/stache.js
 * 
 * Modded so can/view/mustache can be used.
 */

define(['text'], function ( text) {
    'use strict';

    var sourceMap = {},
        buildMap = {},
        buildTemplateSource = "define('{pluginName}!{moduleName}', ['can/view/mustache'], function (Mustache) { var template = '{content}';  return can.mustache( template );  });\n";

    return {
        version: '0.0.1',

        load: function (moduleName, parentRequire, onload, config) {
            if (buildMap[moduleName]) {
                onload(buildMap[moduleName]);

            } else {
            	//console.log('load ' + moduleName);
                var ext = (config.stache && config.stache.extension) || '';
                var path = (config.stache && config.stache.path) || '';
                text.load(path + moduleName + ext, parentRequire, function (source) {
                    if (config.isBuild) {
                        sourceMap[moduleName] = source;
                        onload();
                    } else {
                        
                        buildMap[moduleName] = can.mustache(source);
                        onload(buildMap[moduleName]);
                    }
                }, config);
            }
        },

        write: function (pluginName, moduleName, write, config) {
        	//console.log('write ' + moduleName);
        	var source = sourceMap[moduleName],
                content = source && text.jsEscape(source);
            if (content) {
                write.asModule(pluginName + '!' + moduleName,
                    buildTemplateSource
                    .replace('{pluginName}', pluginName)
                    .replace('{moduleName}', moduleName)
                    .replace('{content}', content));
            }
        }
    };
});