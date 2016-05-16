'use strict';

var request = require('request');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  // var reloadPort = 31729, files;
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              plugins: ['transform-react-jsx'],
              presets: ['es2015', 'react']
            }]
          ]
        },
        files: {
          "app-react.js": ["templates/app.jsx"]
        }
      }
    },
    watch: {
      options: {
        nospawn: true,
        // livereload: reloadPort
      },
      browserify: {
        files: ["templates/*.jsx"],
        tasks: ["browserify"],
        options: {
          // livereload: reloadPort
        }
      },
    }
  });

  grunt.registerTask('default', [
    'browserify',
    'watch'
  ]);
};
