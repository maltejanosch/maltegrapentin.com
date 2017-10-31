module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'styles'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass', 'cssmin', 'uglify']
            }
        },
        cssmin: {
           dist: {
              options: {
                 banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
              },
              files: {
                 'comp/style.min.css': ['styles/style.css', 'styles/cards.css'],
                 'comp/responsive.min.css': ['styles/responsive.css']
              }
          }
        },
          uglify: {
            my_target: {
              files: {
                'comp/script.min.js': ['scripts/script.js']
              }
            }
          }
        });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['watch','cssmin:dist','uglify']);

}