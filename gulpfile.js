var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins
var cssnext = require('postcss-cssnext');
var pxtorem = require('postcss-pxtorem');
var svgFragments = require('postcss-svg-fragments');

gulp.task('css', function () {
    var precessors = [
        cssnext({
            browsers: [
                'last 2 versions',
                'Firefox < 27'
                ]
        }),
        pxtorem({
            propWhiteList: [],
            mediaQuery: true
        }),
        svgFragments
    ];

    return gulp.src('./src/*.css')
        .pipe(postcss(precessors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
    gulp.watch('./src/*.css', ['css']);
});