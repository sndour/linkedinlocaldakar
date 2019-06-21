var gulp = require('gulp');
var gzip = require('gulp-gzip');

// gulp.task('compress', function(done) {
//   gulp.src(['./dist/**/*.*'])
//       .pipe(gzip())
//       .pipe(gulp.dest('./dist'));
//       done();
// });
gulp.task('compressImage', function(done) {
    gulp.src(['./src/assets/images/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'));
        done();
  });