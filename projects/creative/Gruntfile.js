module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dist: {
                options: {
                    compress: false,
                    strictImports: true
                },
                files: {
                    'css/style.css': 'css/style.less'
                }
            }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'css/style.min.css': ['css/style.css']
            }
          }
        },
        sprite: {
            all: {
                src: 'images/sprites/*.png',
                dest: 'images/spritesheet.png',
                destCss: 'css/sprite.less',
                algorithm: 'top-down'
            }
        },
        watch: {
            grunt: {files: ['Gruntfile.js']},
            sprites: {
                files: 'images/sprites/*.png',
                tasks: ['sprite']
            },
            less: {
                files: 'css/*.less',
                tasks: ['less'],
            },
            cssmin: {
                files: 'css/*.less',
                tasks: ['cssmin'],
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        'images/*'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'localhost/projects/creative',
                    debugInfo: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('minifica', ['cssmin']);
    grunt.registerTask('spritesmith', ['sprite']);

    grunt.registerTask('default', ['browserSync','cssmin','watch']);
}

