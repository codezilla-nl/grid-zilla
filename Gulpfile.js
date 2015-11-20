var child_process = require('child_process'),
    del = require('del'),
    gulp = require('gulp'),
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer'),
    q = require('q');

gulp.task('clean-css', function() {
    var deferred = q.defer();
    del(['style/css/**/*'], function() {
        deferred.resolve();
    });
    return deferred.promise;
});

gulp.task('build', ['clean-css'], function() {
    gulp.src('style/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('style/css'));
});