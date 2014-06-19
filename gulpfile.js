var gulp = require('gulp');
var connect = require('connect');
var react = require('gulp-react');

gulp.task('default', function(){
    connect()
        .use(connect.static('app'))
        .listen(9000);
});

gulp.task('react', function(){
    gulp.src('modules/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('modules'))
});