var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('serve', function () {
  connect.server({
    root: './dist/',
    host: '0.0.0.0',
    port: 8000,
    livereload: true
  });
});
