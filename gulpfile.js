var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


gulp.task('sass', async function(){
    return gulp.src('src/stylesheet/style.sass')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('public/css'));
});



gulp.task("default", async function(){
    gulp.watch("./src/stylesheet/*.sass",
    gulp.series("sass"))
})