var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


function sass () {
    return gulp.src('src/stylesheet/style.sass')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('public/css'));
};

function watchFiles (){
    gulp.watch('src/stylesheet/*.sass', sass);
}

gulp.task('start', gulp.series(sass, watchFiles));
