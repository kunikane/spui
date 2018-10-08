const gulp = require('gulp');
const less = require('gulp-less');

// lessコンパイルタスク
gulp.task('less', function(){
  gulp.src('./src/main/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('./src/main/resources/static/css'));
});

////ファイルの変更があった場合、実行されるタスク
//gulp.watch('watch', ['less'], function() {
//  gulp.watch('./src/main/less/*.less', ['less']);
//});

//// デフォルトで実行してもらいたいタスク
//gulp.task('default', ['less']);

// [build]で実行してもらいたいタスク
gulp.task('build', ['less']);
