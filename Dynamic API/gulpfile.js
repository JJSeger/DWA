/**
 * Created by JuddHome on 4/9/17.
 */






//Imports modules



//This imports gulp for task running
const gulp = require('gulp');

//this is the gulp version of mocha for unit tests
const mocha = require('gulp-mocha');


//this is the gulp version of nodemon for server restart on changes
const nodemon = require('gulp-nodemon');


// this defines main gulp task
gulp.task('default', function() {
    // this assigns task to main gulp task
    gulp.watch(['test/**'], ['test']);
});

// this defines tests task
gulp.task('test', function() {


    // this defines source of test files and doesnt read them
    gulp.src(['test/*.js'], { read: false })
        // this sends files to mocha for running unit tests
        .pipe(mocha({ reporter: 'list' }));

});