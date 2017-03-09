var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins
var cssnext = require('postcss-cssnext');

gulp.task('css', function () {
    var precessors = [
        cssnext
    ];

    return gulp.src('./src/*.css')
        .pipe(postcss(precessors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
    gulp.watch('./src/*.css', ['css']);
});