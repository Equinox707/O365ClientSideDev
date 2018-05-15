var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {    
    scss: "./src/sass/**/*.scss",
    scssDest: "./Layouts/TypeScriptSolution/dist"
}

gulp.task('compile:sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.scssDest));
});

//watchers

gulp.task('watch:sass', function () {
    gulp.watch(paths.scss, ['compile:sass']);
});