var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');            // Обработчик ошибок сборщика
var path = require('path');                       // Утилита для работы с путями
var concat = require('gulp-concat');              // объединяет файлы в один бандл
var cleanCSS = require('gulp-clean-css');         // сжимает css
var uglify = require('gulp-uglify');              // Сжимает js
var sourcemaps = require('gulp-sourcemaps');      // Генерация Source-maps
var  babelify = require('babelify');
var  browserify = require("browserify");


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



gulp.task('babel-build', function () {
  return gulp.src('js/**/*.js')
      .pipe(babel())
    .pipe(gulp.dest('build/js/'));
});


// ---------------- JS --------------------------------------------------

var jsPath = 'js/';                              // Директория JS
var jsOutFile = 'c.js';                            // Название выходного js файла
var jsOutPath = 'build/js/c';            // Папка для выходного js файла
var jsMapOutPath = 'map';                     // Папка для map файлов

var jsSourcemapsOptions = { sourceMappingURLPrefix: '/js' };  // Опции для настройка sourceMaps

// Список js файлов для сборки
// названия файлов указываются от jsPath
var jsFiles = [
	"js/libs/device.js",
	"js/libs/jquery.js",
	"js/libs/jqueryMigrate.js",
	"js/libs/jqueryEasing.js",
	"js/libs/datepicker.js",
	"js/modules/userInterface.js",
	"js/modules/validator.js",
	"js/proj.js",
	"js/main.js"
    
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

var cssPath = 'css/';                               // Директория, где располагаются CSS-файлы
var cssOutFile = 'style.css';                         // Название выходного файла css
var cssOutPath = 'build/css/c/';             // папка со склеенным и уменьшенным css. Файл имеет имя cssOutFile
var cssMapOutPath = 'map'; // Директория с map-файлами для собранного css

var cssSourcemapsOptions = { sourceMappingURLPrefix: '/css' }; // Опции для настройка sourceMaps

// ---------------- LESS -------------------------------------------------

var lessPath = path.join(cssPath, 'less');        // Папка с LESS файлами
var mainLess = path.join(lessPath, 'style.less'); // Имя главного LESS файла проекта

gulp.task('build-css-with-less', function(){
   gulp.src('less/style.less')
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



