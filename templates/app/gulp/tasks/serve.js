var connect = require('gulp-connect'),
    gulp = require('gulp');

gulp.task('serve', function () {
  connect.server({
    root: './dist/',
    host: '0.0.0.0',
    port: 8000,
    livereload: true
  });
});
