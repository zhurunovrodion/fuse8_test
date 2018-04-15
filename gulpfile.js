var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');           
var path = require('path');                      
var concat = require('gulp-concat');              
var cleanCSS = require('gulp-clean-css');        
var uglify = require('gulp-uglify');             
var sourcemaps = require('gulp-sourcemaps');      // Генерация Source-maps
var  babelify = require('babelify');
var  browserify = require("browserify");


gulp.task('compileLess', function(){
	
	gulp.src('src/less/style.less')
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
	gulp.watch('src/less/**/*.less', ['compileLess']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watcher']);


gulp.task('browser-sync', function(){
	browserSync({
		server: {
			basedir:'D:\Sites\fuse8\src'
		},

	});
});



gulp.task('babel-build', function () {
  return gulp.src('src/js/**/*.js')
      .pipe(babel())
    .pipe(gulp.dest('build/js/'));
});


// ---------------- JS --------------------------------------------------

var jsPath = 'src/js/';                              // Директория JS
var jsOutFile = 'c.js';                            // Название выходного js файла
var jsOutPath = 'build/js/c';            // Папка для выходного js файла
var jsMapOutPath = 'map';                     // Папка для map файлов

var jsSourcemapsOptions = { sourceMappingURLPrefix: '/js' };  // Опции для настройка sourceMaps

// Список js файлов для сборки

var jsFiles = [
	"src/js/libs/device.js",
	"src/js/libs/jquery.js",
	"src/js/libs/jqueryMigrate.js",
	"src/js/libs/jqueryEasing.js",
	"src/js/libs/datepicker.js",
	"src/js/modules/userInterface.js",
	"src/js/modules/validator.js",
	"src/js/proj.js",
	"src/js/main.js"
    
];


// Сборка и минимизация JS
gulp.task('build-js',  function(){
    gulp.src(jsFiles)
         .pipe(sourcemaps.init())
        .pipe(concat(jsOutFile))
       
        .pipe(babel())
        .pipe(uglify(
            {
                compress: {
                    unused: false,  
                }
            }
            )
        )
        .pipe(sourcemaps.write(jsMapOutPath, jsSourcemapsOptions))
        .pipe(gulp.dest(jsOutPath));
});

// ---------------- CSS -------------------------------------------------

var cssPath = 'src/css/';                               // Директория, где располагаются CSS-файлы
var cssOutFile = 'style.css';                         // Название выходного файла css
var cssOutPath = 'build/css/c/';             // папка со склеенным и уменьшенным css. Файл имеет имя cssOutFile
var cssMapOutPath = 'map'; // Директория с map-файлами для собранного css

var cssSourcemapsOptions = { sourceMappingURLPrefix: '/css' }; // Опции для настройка sourceMaps

// ---------------- LESS -------------------------------------------------


gulp.task('build-css-with-less', function(){
   gulp.src('src/less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(rename(cssOutFile))
        .pipe(sourcemaps.write(cssMapOutPath, cssSourcemapsOptions))
        .pipe(gulp.dest(cssOutPath));
});



