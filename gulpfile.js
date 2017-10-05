const gulp = require('gulp');
const babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('default', () => {
    gulp.src('src/js/**/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'))

    gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
    gulp.src('src/js/**/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
