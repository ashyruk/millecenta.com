/**
 * Created by rybak on 15.06.2017.
 */
var gulp = require('gulp');

var mincss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var paths = {
    html:['./index.html','./pages/Galery.html'],
    css:['./css/*.scss'],
    js:['./js/*.js'],
    img:['./images/*']
};

gulp.task('mincss', function () {
    gulp.src(paths.css).pipe(autoprefixer(({
        browsers: ['last 2 versions'],
        cascade: false}
    ))).pipe(sass().on('error', sass.logError)).pipe(mincss()).pipe(concat('main.css'))
        .pipe(gulp.dest('build')).pipe(notify("Refreshed!"))
        .pipe(reload({stream:true}));
    
});
gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(reload({stream:true}));
});
gulp.task('js', function(){
    gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'))
        .pipe(reload({stream:true}));
});
gulp.task('img',function () {
    gulp.src(paths.img).pipe(imagemin()).pipe(gulp.dest('build/img'));
});
gulp.task('watcher',function(){
    gulp.watch(paths.css, ['mincss']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.img,['img']);
});
gulp.task('default', ['watcher', 'browserSync']);

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});