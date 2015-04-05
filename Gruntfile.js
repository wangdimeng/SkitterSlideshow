module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), 
    banner: '/*! <%= pkg.name %> by <%= pkg.author %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */' + "\n", 
    concat: {
      options: {
        stripBanners: true,
        banner: '<%= banner %>',
        separator: "\n\n",
      },
      dist: {
        src: [
          'src/skitter.js', 
          'src/utils/helpers.js', 
          'src/animations/fade.js', 
        ],
        dest: 'dist/skitter.js',
      },
    }, // concat

    uglify: {
      options: {
        mangle: false, 
        banner: '<%= banner %>',
      },
      skitter: {
        files: {
          'dist/skitter.min.js': [
            'dist/skitter.js'
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
        tasks: ['compass', 'concat', 'uglify'],
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
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Tarefas que serao executadas
  grunt.registerTask('default', ['compass', 'concat', 'uglify']);

  // Tarefa para watch
  grunt.registerTask('w', ['watch']);
};
