module.exports = function(grunt){

grunt.initConfig({
	watch:{
		sass:{
			files: ['css/*.scss'],
			tasks: ['sass']
		},
    options:{
      livereload:true
    }
	},
  sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/', //gdzie szukac
          src: ['*.scss'],//co szukac
          dest: 'css/',//gdzie zapisac
          ext: '.css'//z jakim skrotem
        }]
      }
    },
  cssmin: {
    options: {
      mergeIntoShorthands: false,
      roundingPrecision: -1
    },
    target: {
      files: [{
        expand:true,
        cwd:'css/',
        src:['*.css'],
        dest:'css/min/',
        ext:'.min.css'

      }]
    }
  },
  concat: {
    // options: {
    //   separator: ';',
    // },
    dist: {
      src: ['css/style.css', 'css/style2.css'],
      dest: 'css/mainStyle.css'
    }
  },
  uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: '*.js',
          dest: 'prod/js',
          ext: '.js'
        }]
      }
    },
  imagemin: {
      options: {
        optimizationLevel: 7,
        progressive :true,
        //svgoPlugins: [{removeViewBox: false}],
        //use: [mozjpeg()] // Example plugin usage 
      },
      dynamic: {
          files: [{
              expand: true,
              cwd: 'images/',
              src: ['*.{png,JPG,gif}'],
              dest: 'prod/',
              ext: '.jpg'
          }]
      }
  },
  express:{
    all:{
      options:{
        port: 8000,
        hostname: 'localhost',
        bases: ['.'],
        livereload:true
      }
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-express');

grunt.registerTask('default', ['sass']);
grunt.registerTask('server', ['express','watch']);
};
