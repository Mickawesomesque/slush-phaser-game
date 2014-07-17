var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('./src/*.jade', ['build-markup']);
  gulp.watch('./src/scripts/**/*.js', ['build-scripts']);
  gulp.watch('./src/stylesheets/*.scss', ['build-stylesheets']);
});
