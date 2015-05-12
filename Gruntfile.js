module.exports = function(grunt) {

//Initializing the configuration object
  grunt.initConfig({

          less: {
        development: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              //compiling base.less into style.css
              "./public/assets/stylesheets/style.css":"./static/css/base.less"
            }
          }
      },
  concat: {
    options: {
      separator: ';',
    },
    js_frontend: {
      src: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/bootstrap/dist/js/bootstrap.js',
        './static/js/main.js'
      ],
      dest: './public/assets/javascript/main.js',
    }
  },
  uglify: {
    options: {
      mangle: false  // Use if you want the names of your functions and variables unchanged
    },
    frontend: {
      files: {
        './public/assets/javascript/main.js': './public/assets/javascript/main.js',
      }
    },
  },
  watch: {
      js_frontend: {
        files: [
          //watched files
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './static/js/main.js'
          ],   
        tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
        options: {
          livereload: true                        //reloads the browser
        }
      },
      less: {
        files: ['./static/css/*.less'],  //watched files
        tasks: ['less'],                          //tasks to run
        options: {
          livereload: true                        //reloads the browser
        }
      },
      html: {
        files: ['*.php'],  //watched files
        options: {
          livereload: true                        //reloads the browser
        }
      }
    }
  });

// Plugin loading
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Task definition
grunt.registerTask('default', ['watch']);

};