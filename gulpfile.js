var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins
var cssnext = require('postcss-cssnext');
var pxtorem = require('postcss-pxtorem');

gulp.task('css', function () {
    var precessors = [
        cssnext,
        pxtorem({
            propWhiteList: [],
            mediaQuery: true
        })
    ];

    return gulp.src('./src/*.css')
        .pipe(postcss(precessors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
    gulp.watch('./src/*.css', ['css']);
});