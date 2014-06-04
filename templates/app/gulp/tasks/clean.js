var gulp = require('gulp')
    clean = require('gulp-clean');

gulp.task('clean-all', [
  'clean-markup', 'clean-scripts', 'clean-stylesheets', 'clean-vendors'
]);

gulp.task('clean-markup', function () {
  gulp.src('./dist/*.html', {read: false})
    .pipe(clean());
});

gulp.task('clean-scripts', function () {
  gulp.src('./dist/js/game.js', {read: false})
    .pipe(clean());
});

gulp.task('clean-stylesheets', function () {
  gulp.src('./dist/css/*.css', {read: false})
    .pipe(clean());
});

gulp.task('clean-vendors', function () {
  ['phaser.min.js', 'phaser.js', 'phaser.map'].forEach(function (file) {
    gulp.src(file, {read: false})
      .pipe(clean());
  });
});
