/*global module:false*/
'use strict';

var opt = require('./requirejs-options');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({

    clean: {
      release: 'app-production'
    },

    requirejs: {
      compile: {
        options: opt
      }
    },
    less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "css/main.css": "css/main.less"
          }
        }
      },
      watch: {
        styles: {
          files: ['css/**/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: '',
            keepalive:true
          }
        }
      }
  });


 

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('build', ['clean', 'requirejs', 'less']);
  grunt.registerTask('default', ['less','watch']);
  grunt.registerTask('server', ['less','watch', 'connect']);

};
