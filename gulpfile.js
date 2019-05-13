var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('styles', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat('build.css'))
    .pipe(gulp.dest('./build/'));
});

const minify = require('gulp-minify');

gulp.task('compress', function(done) {
  gulp.src(['build/build.js'])
    .pipe(minify())
    .pipe(gulp.dest('build'))
    done();
});

gulp.task('watch', function() {
   gulp.watch('src/js/*.js', gulp.series('scripts'));
   gulp.watch('src/css/*.css', gulp.series('styles'));
});

gulp.task('default', gulp.series('scripts', 'styles', 'compress', 'watch'))
