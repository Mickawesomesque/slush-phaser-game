var gulp = require('gulp'),
    browserify = require('browserify'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    linter = require('gulp-jshint'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify');

var cfg = require('../../config');

var DEBUG = !!process.env.ENV && process.env.ENV === 'dev';

gulp.task('build-all', [
  'build-markup', 'build-scripts', 'build-stylesheets', 'build-vendors',
]);

gulp.task('build-markup', ['clean-markup'], function () {
  gulp.src('./src/*jade')
    .pipe(jade({
      pretty: DEBUG,
      data: {
        name: cfg.name,
        debug: DEBUG
      }
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('build-scripts', ['lint', 'clean-scripts'], function () {
  browserify('./src/scripts/main.js').bundle({debug: DEBUG})
    .pipe(source('game.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(connect.reload());
});

gulp.task('build-stylesheets', ['clean-stylesheets'], function () {
  gulp.src('./src/stylesheets/*.css')
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload());
});

gulp.task('build-vendors', ['clean-vendors'], function () {
  [
    './bower_components/phaser-official/build/phaser.min.js',
    './bower_components/phaser-official/build/phaser.js',
    './bower_components/phaser-official/build/phaser.map'
  ].forEach(function (file) {
    gulp.src(file)
      .pipe(gulp.dest('./dist/js/'));
  })
});

gulp.task('lint', function () {
  gulp.src('./src/scripts/**/*.js')
    .pipe(linter())
    .pipe(linter.reporter('jshint-stylish'));
});

gulp.task('uglify', function () {
  gulp.src('./dist/js/game.js')
    .pipe(rename('game.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});
