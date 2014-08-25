'use strict';

var fs = require('fs');
var browserSync = require('browser-sync');
var browserify = require('browserify');

var gulp = require('gulp');
var gutil = require('gulp-util');
var ignore = require('gulp-ignore');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');
var linter = require('gulp-eslint');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

var cfg = require('../config');

var DEBUG = process.env.NODE_ENV === 'dev';

gulp.task('build:all', [
  'build:audio',
  'build:fonts',
  'build:images',
  'build:html',
  'build:js',
  'build:css',
  'build:vendors'
]);

gulp.task('build:audio', function () {
  return gulp.src('./assets/audio/**/*')
    .pipe(gulp.dest('./build/assets/audio/'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('build:fonts', function () {
  return gulp.src('./assets/fonts/**/*')
    .pipe(gulp.dest('./build/assets/fonts'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('build:images', function () {
  return gulp.src(['./assets/*.jpg', './assets/*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('build:html', function () {
  return gulp.src('./src/*jade')
    .pipe(jade({
      pretty: DEBUG,
      data: {
        name: cfg.name,
        debug: DEBUG
      }
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('build:js', function () {
  return browserify('./src/scripts/main.js', {debug: DEBUG})
    .bundle()
    .on('error', onBrowserifyError)
    .pipe(source('game.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('build:css', function () {
  return gulp.src('./src/stylesheets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('build:vendors', function () {
  var bowerConfig = JSON.parse(fs.readFileSync('./.bowerrc', 'utf8'));

  return gulp.src('./' + bowerConfig['directory'] + '/phaser/build/phaser*')
    .pipe(ignore('*.ts'))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('build:dist', function () {
  return gulp.src('./dist/js/game.js')
    .pipe(rename('game.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('lint', function () {
  gulp.src('./src/scripts/**/*.js')
    .pipe(linter({globals: {'Phaser': false}}))
    .pipe(linter.format());
});

function onBrowserifyError(err) {
  gutil(gutil.colors.red('ERROR'), gutil.colors.grey(err.message));
  this.emit('end');
};
