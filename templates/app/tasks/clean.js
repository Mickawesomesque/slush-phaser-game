'use strict';

var gulp = require('gulp');
var clean = require('gulp-rimraf');

gulp.task('clean:all', [
  'clean:audio',
  'clean:fonts',
  'clean:images',
  'clean:html',
  'clean:js',
  'clean:css',
  'clean:vendors',
  'clean:dist',
]);

gulp.task('clean:audio', function () {
  gulp.src('./build/assets/audio/', {read: false})
    .pipe(clean());
});

gulp.task('clean:fonts', function () {
  gulp.src('./build/assets/fonts/', {read: false})
    .pipe(clean());
});

gulp.task('clean:images', function () {
  gulp.src(['./build/assets/*.jpg', './dist/assets/*.png'], {read: false})
    .pipe(clean());
});

gulp.task('clean:html', function () {
  gulp.src('./dist/*.html', {read: false})
    .pipe(clean());
});

gulp.task('clean:js', function () {
  gulp.src('./build/js/game.js', {read: false})
    .pipe(clean());
});

gulp.task('clean:css', function () {
  gulp.src('./build/css/*.css', {read: false})
    .pipe(clean());
});

gulp.task('clean:vendors', function () {
  gulp.src('./build/js/phaser*', {read: false})
    .pipe(clean());
});

gulp.task('clean:dist', function () {
  gulp.src('./dist/', {read: false})
    .pipe(clean());
});
