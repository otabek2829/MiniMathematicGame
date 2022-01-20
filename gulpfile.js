const { watch } = require('browser-sync');
const gulp = require('gulp')
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const csso = require('gulp-csso');
const rename = require("gulp-rename");


var reload = browserSync.reload;


gulp.task('style', style)

function style() {
    return gulp.src('./style.css')
        .pipe(autoprefixer({
            browsers : ['last 10 versions'],
            cascade: false
        }))
        // Media oxirga
        .pipe(gcmq())

        // Bir qator
        .pipe(csso())
        .pipe(gulp.dest('./style/'))
        .pipe(rename({
            suffix : ".min",
        }))
        .pipe(gulp.dest('./style/'))

}


gulp.task('view', function () {
    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.css").on("change", reload);
})
gulp.task('watch', function () {
    watch('./app/precss/*.css', style)
})

// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', gulp.parallel('style', 'server', 'view'))
