var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    minifyCSS    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    merge        = require('merge-stream'),
    util         = require('gulp-util');


gulp.task('scss', function() {
	gulp.src('src/*.scss')
	    .pipe(sass())
	    .on('error', function(err){ console.log(util.colors.red(err.message)); })
	    .pipe(autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'ie >= 11', 'safari >= 7', 'opera >= 15', 'android >= 4', 'ios >= 7']}))
	    // .pipe(minifyCSS())
	    .pipe(gulp.dest('dist/'))
	    .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist/'
		}
		// proxy: 'http://',
		// reloadDelay: 1000
	});
});

gulp.task('watch', function() {
	gulp.watch('src/*.scss', ['scss']);
});

gulp.task('server', ['watch', 'browser-sync']);
