const gulp = require('gulp');

const { src, dest } = gulp;
// Import Gulp plugins.
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const clean = require('gulp-rimraf');

//clear dist folder
gulp.task('clean', function () {
    return gulp.src('./dist/*', { read: false })
        .pipe(plumber())
        .pipe(clean());
});

// Copy all styles to dist folder
gulp.task('copy-styles', function () {
    return gulp.src('./src/styles/**/*.less')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/styles'));
});

// Convert all less files to css
gulp.task('lesscss', function () {
    return gulp.src('./dist/styles/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./dist/styles'));
});

// Style transform
gulp.task('style-transform', gulp.series(['copy-styles', 'lesscss']));

// Bable transform
gulp.task('bable-transform', function () {
    return gulp.src('./src/**/*.js')
        .pipe(plumber())
        .pipe(babel({}))
        .pipe(dest('./dist'))
});

gulp.task('default', gulp.series('clean', 'bable-transform', 'style-transform'));