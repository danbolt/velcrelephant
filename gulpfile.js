var gulp = require('gulp')
  , gutil = require('gulp-util')
  , clean = require('gulp-clean')
  , concat = require('gulp-concat')
  , rename = require('gulp-rename')
  , minifycss = require('gulp-minify-css')
  , processhtml = require('gulp-processhtml')
  , tslint = require('gulp-tslint')
  , type = require('gulp-type')
  , uglify = require('gulp-uglify')
  , connect = require('gulp-connect')
  , paths,
  runSequence = require('run-sequence'); // needed for non-dependent ordered tasks

paths = {
  assets: 'app/assets/**/*',
  css:    'app/css/*.css', 
  sources:   [
    'app/vendor/phaser-official/build/phaser.min.js'
  ],
  libs:   [
    'app/vendor/phaser-official/build/phaser.d.ts'
  ],
  app:     ['app/scripts/**/*.ts'],
  dist:   'build/'
};

gulp.task('clean', function () {
  return gulp.src([paths.dist], {read: false})
    .pipe(clean({force: true}))
    .on('error', gutil.log);
});

gulp.task('copy', function () {
  return gulp.src(paths.assets)
    .pipe(gulp.dest(paths.dist + '/assets'))
    .on('error', gutil.log);
});

gulp.task('sources', function () {
  return gulp.src(paths.sources)
    .pipe(uglify({outSourceMaps: false}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('compile', ['lint'], function () {
  return gulp.src(paths.libs.concat(paths.app))
    .pipe(type({
      declarationFiles: true,
      noExternalResolve: true
    })).js
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('minifycss', function () {
 return gulp.src(paths.css)
    .pipe(minifycss({
      keepSpecialComments: false,
      removeEmpty: true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist))
    .on('error', gutil.log);
});

gulp.task('processhtml', function() {
  return gulp.src('app/index.html')
    .pipe(processhtml('index.html'))
    .pipe(gulp.dest(paths.dist))
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  return gulp.src(paths.app)
    .pipe(tslint())
    .pipe(tslint.report('prose', {emitError: true}));
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(gulp.dest(paths.dist))
    .pipe(connect.reload())
    .on('error', gutil.log);
});

gulp.task('connect', function () {
  connect.server({
    root: [__dirname + '/build'],
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(paths.app, ['compile']);
  gulp.watch(['./app/index.html', paths.css, paths.app], ['html']);
});

gulp.task('default', function() {
  runSequence('build',
    ['connect', 'watch']);
});

gulp.task('build', 
  runSequence('clean', 
    ['copy', 'compile', 'sources', 'minifycss', 'processhtml']));

