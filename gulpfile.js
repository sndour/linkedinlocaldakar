var gulp = require('gulp');
var gzip = require('gulp-gzip');

var imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg'); 

gulp.task('compressImage', function() {
    return gulp.src(['./src/assets/images/*'])
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 10 
            })
        ]))
        .pipe(gulp.dest('./dist/linkedinlocaldakar/assets/images'));
});
gulp.task('compressLast', function() {
    return gulp.src(['./src/assets/images/last/*'])
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 8 
            })
        ]))
        .pipe(gulp.dest('./dist/linkedinlocaldakar/assets/images/last'));
});
gulp.task('compressSpeakers', function() {
    return gulp.src(['./src/assets/images/speakers/*'])
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 35 
            })
        ]))
        .pipe(gulp.dest('./dist/linkedinlocaldakar/assets/images/speakers'));
});
gulp.task('compress', function(done) {
  gulp.src(['./dist/assets/js/*.*'])
      .pipe(gzip())
      .pipe(gulp.dest('./dist/assets/js'));
      done();
});
// gulp.task('compressImage', function(done) {
//     gulp.src(['./src/assets/images/*'])
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dist/assets/images'));
//         done();
//   });