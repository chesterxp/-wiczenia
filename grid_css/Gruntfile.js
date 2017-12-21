module.exports = function(grunt) {
    grunt.initConfig({

        watch: {
            css: {
                files: ['css/*.scss'],
                // tasks: ['sass','concat','cssmin'],
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css/', //gdzie szukac
                    src: ['*.scss'], //co szukac
                    dest: 'css/', //gdzie zapisac
                    ext: '.css' //z jakim skrotem
                }]
            }
        },
        concat: {
            // options: {
            //   separator: ';',
            // },
            dist: {
                src: ['css/style.css', 'css/style2.css'],
                dest: 'css/mainStyle.css',
            },
        },
        uglify: {
            options: {
                ASCIIOnly: true
            },

            dist: {
                files: {
                    'main-min.js': 'main.js'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                  expand: true,
                  cwd: 'css/',
                  src: ['*.css', '!*.min.css'],
                  dest: 'css/',
                  ext: '.min.css'
                }]
            }
        },
        express: {
            all: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    bases: ['.'],
                    livereload: true
                }
            }
        },
        compress: {
          main: {
            options: {
              mode: "gzip",
              //archive: "style-min.cssgz"
            },
            files: [
              {
                expand: true,
                src: 'css/*.min.css',
                dest: '',
                ext: '.cssgz'
              }
            ]
          },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('server', ['express', 'watch']);
    grunt.registerTask('production', ['cssmin', 'compress']);

}