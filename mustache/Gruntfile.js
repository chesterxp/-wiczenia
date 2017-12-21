module.exports = function(grunt){
	grunt.initConfig({

	  watch: {
	    css: {
	      files: ['css/*.scss'],
	      // tasks: ['sass','concat','cssmin'],
	      tasks: ['sass'],
	    },
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
	  concat: {
	    dist: {
	      src: ['css/style.css','css/style2.css'],
	      dest:'css/mainStyle.css',
	    },
	  },
	  uglify: {
	    my_target: {
	      files: {
	        'css/mainStyle.min.css': ['css/mainStyle.css']
	      }
	    }
	  },
	  cssmin: {
	    options: {
	      mergeIntoShorthands: false,
	      roundingPrecision: -1
	    },
	    target: {
	      files: {
	        'css/mainStyle.min.css': ['css/mainStyle.css']
	      }
	    }
	  },
	  express:{
	  	all:{
	  		options:{
	  			port:8000,
	  			hostname:'localhost',
	  			bases:['.'],
	  			livereload:true
	  		}
	  	}
	  }

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('server',['express','watch']);
}