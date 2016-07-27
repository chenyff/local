var gulp = require('gulp'),  

    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');


// 样式处理任务
gulp.task('test', function() {  
  return gulp.src('css/*.css')    //引入所有CSS
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('public/dist/css'));     
});

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'));
});

gulp.task('default', ['test', 'js']);