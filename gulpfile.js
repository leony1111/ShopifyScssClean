const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
/* const concat = require('gulp-concat');
const uglify = require('gulp-uglify'); */
// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./scss/*.scss')
        // 2. pass that file through sass compiler
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: true
        }).on('error', sass.logError))
        // 3. where do i save the compiled css
        .pipe(gulp.dest('./assets/'))
}

function watch() {
    gulp.watch('./scss/**/*.scss', style);
    //gulp.watch('./**/*.html').on('change', browserSync.reload);
 //   gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;