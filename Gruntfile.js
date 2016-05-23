'use strict';

var reloadPort = 9002;

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: reloadPort,
          base: 'app',
          livereload: true,
        }
      }
    },
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
          "app/app-react.js": ["app.jsx"]
        }
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      html: {
        files: ['app/index.html'],
        options: {
          livereload: true,
        }
      },
      grunt: {
        files: ['Gruntfile.js']
      },
      browserify: {
        files: ["**/*.jsx"],
        tasks: ["browserify"],
        options: {
          livereload: true,
        }
      },
    }
  });

  grunt.registerTask('default', [
    'browserify',
    'connect',
    'watch'
  ]);
};
