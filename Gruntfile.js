var path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      dev: {
        options: {
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      www: {
        files: ['*.*'],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', '', function() {
  });
  grunt.registerTask('serve', ['connect' ,'watch']);

};
