module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), 
    uglify: {
      options: {
        mangle: false, 
        banner: '/*! <%= pkg.name %> by <%= pkg.author %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      skitter: {
        files: {
          'dist/skitter.min.js': [
            'src/skitter.js', 
            'src/utils/helpers.js', 
            'src/animations/fade.js', 
          ]
        }
      }
    }, // uglify
    
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    }, // compass
    
    watch: {
      options: {
        livereload: true
      }, 
      dist: {
        files: [
          'src/*',
          'src/**/*',
          'scss/*',
          'scss/**/*', 
        ],
        tasks: ['compass', 'uglify:skitter'],
        options: {
          spawn: false,
        }
      }, 
      grunt: {
        files: ['Gruntfile.js']
      }
    } // watch
  });
  
  // Plugins do grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefas que serao executadas
  grunt.registerTask('default', ['compass', 'uglify']);

  // Tarefa para watch
  grunt.registerTask('w', ['watch']);
};
