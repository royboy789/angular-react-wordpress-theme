var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCSS = require('gulp-concat-css');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('sass', function(){
	gulp.src('assets/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'));
	gulp.src('assets/css/*.css')
		.pipe(concatCSS('css/styles.css'))
		.pipe(gulp.dest('build'));
});

gulp.task('js', function(){
	gulp.src(['bower_components/angular/angular.min.js', 'bower_components/angular-resource/angular-resource.min.js'])
		.pipe(concat('js/react_angular.min.js'))
		.pipe(gulp.dest('build'));
	
	gulp.src('assets/js/*.js')
		.pipe(concat('js/scripts.js'))
		.pipe(gulp.dest('build'));
})

gulp.task('default', ['sass', 'js']);

gulp.task('watch', function(){
	gulp.watch('assets/scss/*.scss', ['sass'] );
	gulp.watch('assets/js/*.js', ['js'] );
})