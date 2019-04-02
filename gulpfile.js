const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function styles() {
  return src('assets/scss/styles.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })).on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(dest('assets/css'));
}

function serve() {
  browserSync.init({
    open: false,
    notify: false,
    proxy: 'localhost:4000'
  });

  watch('assets/scss/**/*', styles);
  watch('_site/**/*').on('change', browserSync.reload);
}

exports.default = series(styles, serve);
