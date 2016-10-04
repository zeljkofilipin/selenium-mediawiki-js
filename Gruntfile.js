module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Configure a jshint task
    jshint: {
      all: ['Gruntfile.js', 'selenium/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configure a run task
    run: {
      index: {
        args: ['selenium/main_page.js']
      }
    },

    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          timeout: 100000,
        },
        src: ['test/**/*.js'],
      },
    },

  });

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'run', 'mochaTest']);

};
