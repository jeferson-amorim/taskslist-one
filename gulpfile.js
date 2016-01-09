'use strict';

/*===============================
=            Loaders            =
===============================*/

var gulp            = require('gulp');
var jshint          = require('gulp-jshint');
var livereload      = require('gulp-livereload');
var spawn           = require('child_process').spawn;
var node;

/*=====  End of Loaders  ======*/

/*==================================
=            References            =
==================================*/

var files = ['./server.js', './dev/api/**/*.js', './dev/app/**/*.js', '!./dev/app/js/**/*.js'];


/*=====  End of References  ======*/

gulp.task('hint', function () {
    return gulp.src(files)
        .pipe(jshint({esnext: true, node: true }))
        .pipe(jshint.reporter('default'));
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


gulp.task('api', ['hint', 'server'], function () {

    livereload.listen();

    gulp.watch(files, ['hint', 'server', 'files']);
});
