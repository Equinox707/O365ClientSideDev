var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

var paths = {    
    scriptSource: "./Layouts/JavaScript/demos/es6*.js",
    scriptDest: "./Layouts/JavaScript/bundle/",
    scss: "./Layouts/JavaScript/sass/**/*.scss",
    scssDest: "./Layouts/JavaScript/css/"
}

gulp.task('babel:ToES5', () => {
    return gulp.src([paths.scriptSource])
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('es5-bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scriptDest));
});

gulp.task('compile:sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.scssDest));
});

//watchers

gulp.task('watch:sass', function () {
    gulp.watch(paths.scss, ['compile:sass']);
});

gulp.task('watch:babel', function () {
    gulp.watch(paths.scss, ['babel:es5']);
});