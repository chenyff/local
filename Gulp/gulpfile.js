var gulp = require('gulp');
var cssmain = require('gulp-minify-css');

gulp.task('cyfCssMin',function(){
	gulp.src('src/**/*.css')
	    .pipe(cssmain())
	    .pipe(gulp.dest('dist/'));
});
