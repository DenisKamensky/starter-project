'use strict';
const gulp = require('gulp'),
vfs = require('vinyl-fs'),
sass = require('gulp-sass');
gulp.task('styles',function(){
	return vfs.src('app/sass/**/*.{sass,scss}')
	.pipe(sass())
	.pipe(gulp.dest('app/'))
});