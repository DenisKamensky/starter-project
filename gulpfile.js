'use strict';
const gulp = require('gulp'),
vfs = require('vinyl-fs')
gulp.task('files',function(){
	return vfs.src('app/**/*.html')
	.on('data',function(file){
		console.log(file)
	})
	.pipe(gulp.dest('public'));
})