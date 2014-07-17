var browserSync = require('browser-sync'),
    gulp = require('gulp');

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: './dist/',
    },
    port: 8000
  });
});
