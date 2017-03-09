var gulp = require('gulp');
var postcss = require('gulp-postcss');

// Plugins

gulp.task('css', function () {
    var precessors = [

    ];

    return gulp.src('./src/*.css')
        .pipe(postcss(precessors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
    gulp.watch('./src/*.css', ['css']);
});