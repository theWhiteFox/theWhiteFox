var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	rename = require("gulp-rename");
// concat = require('gulp-concat');

gulp.task('scripts', function () {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
			path.extname = ".js"
		}))
	// .pipe(concat('all.min.js'))
		.pipe(gulp.dest('build/min-js'));
});

gulp.task('styles', function () {
	gulp.src('css/*.css')
		.pipe(minifyCss())
		.pipe(rename(function (path) {
			path.basename += ".min";
			path.extname = ".css"
		}))
	// .pipe(concat('all.min.css'))
		.pipe(gulp.dest('build/min-css'));
});


gulp.task('default', ['scripts', 'styles']);