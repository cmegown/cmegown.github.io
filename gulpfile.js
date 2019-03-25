const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  return gulp.src('assets/scss/styles.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('serve', function () {
  browserSync.init({
    open: false,
    notify: false,
    proxy: 'localhost:4000'
  });

  gulp.watch('assets/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('_site/**/*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('styles', 'serve'));
