var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync');




gulp.task('compileLess', function(){
	
	gulp.src('less/style.less')
		.pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gcmq())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream:true}))
});


gulp.task('watcher',['browser-sync', 'compileLess'], function(){
	gulp.watch('less/**/*.less', ['compileLess']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watcher']);


gulp.task('browser-sync', function(){
	browserSync({
		server: {
			basedir:'D:\Sites\fuse8'
		},

	});
});