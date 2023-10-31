const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass')) //invoke to compile sass to css
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('custom/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['custom/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)