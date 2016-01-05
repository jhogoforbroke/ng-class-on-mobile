module.exports = function (grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsfiles: [
      'src/js/*.js',
      'Gruntfile.js',
      '!*.min.js'
    ],

    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['newer:jshint:all']
      },
      jsTest: {
        files: ['test/unit/*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['src/styles/*.less'],
        tasks: ['less','autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'examples/{,*/}*.html',
          'examples/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          'src/styles/(,*/}*.css'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        // Change this to '*' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          keepalive: true,
          base: [
            'examples',
            'bower_components',
            'src'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            'examples',
            'bower_components',
            'src',
            'test/'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          keepalive: true,
          base: [
            'examples',
            'bower_components',
            'dist'
          ]
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'src/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/{,*/}*.js', 'test/e2e/{,*/}.js']
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 5 version', 'ie >= 8']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: '{,*/}*.css',
          dest: 'dist/css/'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/js/',
          src: '{,*/}*.js',
          dest: 'src/js/'
        }]
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/ng-class-on-mobile.min.js': [
            'src/js/ngClassOnMobile.js',
            'src/js/services/deviceCheckService.js',
            'src/templates/templates.js',
            'src/js/directives/ngClassOnMobile.js',
          ]
        }
      }
    },

    html2js: {
      options: {
        module: 'ngClassOnMobile'
      },
      main: {
        src: ['src/templates/**/*.html'],
        dest: 'src/templates/templates.js'
      },
    },

    less: {
      development: {
        files: {
          'src/styles/ng-class-on-mobile.css': 'src/styles/ng-class-on-mobile.less'
        }
      }
    },

    // karma: {
    //   unit: {
    //     configFile: 'karma.conf.js',
    //     singleRun: true
    //   }
    //   #<{(|
    //   custom: {
    //     configFile: 'karma.conf.js',
    //     autoWatch: true,
    //     singleRun: false
    //   }
    //   |)}>#
    // }
  });

  grunt.registerTask('server-dev', [
    'less',
    'html2js',
    'autoprefixer',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('server', [
    'less',
    'html2js',
    'autoprefixer',
    'uglify',
    'connect:dist'
  ]);

  // grunt.registerTask('test', [
  //   'autoprefixer',
  //   'connect:test',
  //   'karma'
  // ]);

  grunt.registerTask('build', [
    'less',
    'html2js',
    'autoprefixer',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    // 'test',
    'build'
  ]);
};
