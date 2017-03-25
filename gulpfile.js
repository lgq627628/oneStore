var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var insert = require('gulp-insert');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

var htmlPath='./src/**/*.html';
var stylePath='./src/**/*.css';
var scriptPath='./src/**/*.js';

gulp.task('style',function(){
	return gulp.src(stylePath)
		.pipe(concat('index.min.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.stream());
})

gulp.task('script',function(){
	return gulp.src(scriptPath)
		.pipe(concat('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.stream());
})

gulp.task('default',['style','script'],function(){
	browserSync.init({
		server:{
			baseDir: './'
		},
	})
	gulp.watch(scriptPath,['script']);
	gulp.watch(stylePath,['style']);
	gulp.watch(htmlPath,browserSync.reload);
	gulp.watch('./*.html',browserSync.reload);
})