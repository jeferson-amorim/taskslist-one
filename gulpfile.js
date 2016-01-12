'use strict';

/*===============================
=            Loaders            =
===============================*/

var gulp            = require('gulp');
var jshint          = require('gulp-jshint');
var livereload      = require('gulp-livereload');
var spawn           = require('child_process').spawn;
var compass         = require('gulp-compass');
var jasmineBrowser  = require('gulp-jasmine-browser');
var runSequence     = require('run-sequence');
var clean           = require('gulp-dest-clean');
var usemin          = require('gulp-usemin');
var htmlmin         = require('gulp-htmlmin');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var minifyCss       = require('gulp-minify-css');
var node;

/*=====  End of Loaders  ======*/

/*==================================
=            References            =
==================================*/

var dev = './dev/';
var app = './public/';

var htmlFiles  = dev + '**/*.html';

var files = ['./server.js', './api/**/*.js', './dev/api/**/*.js', './dev/app/**/*.js', '!./dev/app/js/**/*.js'];
var sassFiles = ['./dev/sass/**/*.scss'];
var specs = [
    './dev/bower_components/Chart.js/Chart.min.js',
    './dev/bower_components/angular/angular.min.js',
    './dev/bower_components/angular-route/angular-route.min.js',
    './dev/bower_components/angular-resource/angular-resource.min.js',
    './dev/bower_components/angular-animate/angular-animate.min.js',
    './dev/bower_components/angular-chart.js/dist/angular-chart.js',
    './dev/bower_components/angular-mocks/angular-mocks.js',
    './dev/app/app.js',
    './dev/app/controllers/*.js',
    './tests/**/*-specs.js'
];
/*=====  End of References  ======*/

gulp.task('hint', function () {
    return gulp.src(files)
        .pipe(jshint({esnext: true, node: true }))
        .pipe(jshint.reporter('default'));
});

gulp.task('specs', function () {
    return gulp.src(specs)
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless());
});

gulp.task('server', function () {
    if (node) {
        node.kill();
    }

    node = spawn('node', ['server.js'], {stdio: 'inherit'});
    node.on('close', function (code) {

        if (code === 8) {
            console.log('Error detected, waiting for changes...');
        }
    });
});

gulp.task('files', function () {
    return gulp.src(files).pipe(livereload());
});

gulp.task('compass', function () {
    return gulp.src(sassFiles)
        .pipe(compass({
            sass: './dev/sass',
            css: './dev/css',
        }));
});

gulp.task('build', function () {
    runSequence('clean', 'copy', 'usemin', 'minify', 'css-base', 'css-hacks', 'scripts', 'uglify', 'final-scripts');
});

gulp.task('clean', function () {
    return gulp.src(app)
        .pipe(clean(app));
});

gulp.task('copy', function () {

    gulp.src(dev + 'images/**/*')
        .pipe(gulp.dest(app + 'images'));
});

gulp.task('usemin', function () {
    return gulp.src(htmlFiles)
        .pipe(usemin())
        .pipe(gulp.dest(app));
});

gulp.task('minify', function() {
  return gulp.src(app + '**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(app))
});

gulp.task('css-base', function () {
    return gulp.src(dev + 'css/main.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(app + 'css'));
});

gulp.task('css-hacks', function () {
    return gulp.src(dev + 'css/ie.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(app + 'css'));
});


gulp.task('scripts', function() {
  return gulp.src(dev + 'app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(app + 'app'));
});

gulp.task('uglify', function () {
    return gulp.src(app + 'app/app.js')
        .pipe(uglify())
        .pipe(gulp.dest(app + 'app'));
});

gulp.task('final-scripts', function(){

return gulp.src([
        dev + 'bower_components/Chart.js/Chart.min.js',
        dev + 'bower_components/angular/angular.min.js',
        dev + 'bower_components/angular-route/angular-route.min.js',
        dev + 'bower_components/angular-resource/angular-resource.min.js',
        dev + 'bower_components/angular-animate/angular-animate.min.js',
        dev + 'bower_components/angular-chart.js/dist/angular-chart.js',
        app + 'app/app.js'
    ]).pipe(concat('app.js'))
    .pipe(gulp.dest(app + 'app'));
});

gulp.task('api', ['hint', 'specs', 'compass', 'server'], function () {

    livereload.listen();
    gulp.watch(sassFiles, ['compass']);
    gulp.watch(files, ['hint', 'specs', 'server', 'files']);
});
