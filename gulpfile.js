const gulp = require('gulp');
const less = require('gulp-less');
const sass = require('gulp-sass');

// lessコンパイルタスク
gulp.task('less', function(){
  gulp.src('./src/main/css/*.less')
  .pipe(less())
  .pipe(gulp.dest('./src/main/resources/static'));
});
// sassコンパイルタスク
gulp.task('sass', function(){
  gulp.src('./src/main/css/+(*.css|*.sass|*.scss)')
    .pipe(sass({outputStyle: 'expanded'}))
  .pipe(gulp.dest('./src/main/resources/static'));
});



////ファイルの変更があった場合、実行されるタスク
//gulp.watch('watch', ['less'], function() {
//  gulp.watch('./src/main/less/*.less', ['less']);
//});

//// デフォルトで実行してもらいたいタスク
//gulp.task('default', ['less']);

// [build]で実行してもらいたいタスク
gulp.task('build', ['less','sass']);
