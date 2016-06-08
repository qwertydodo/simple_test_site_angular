var gulp = require('gulp'), 
    uglify = require('gulp-uglify'), 
    concat = require('gulp-concat'), 
    browserSync = require('browser-sync').create(),
    less = require('gulp-less'),
    jshint = require('gulp-jshint'),
    htmlmin  = require('gulp-htmlmin'),
    bower = require('gulp-bower'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    //browserify = require('browserify'),
    //source = require('vinyl-source-stream'),
    exec = require('child_process').exec,
    FOLDER_BUILD = './build',
    FOLDER_DEV = './public';

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: FOLDER_BUILD,
            port: 5000
        }
    });
});

gulp.task('js', function () {
    console.log(FOLDER_DEV + '/js/**/*.js');
    gulp.src([FOLDER_DEV + '/js/**/*.js'])
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(FOLDER_BUILD + '/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function () {
    gulp.src([FOLDER_DEV + '/**/*.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(FOLDER_BUILD + '/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('less', function () {
    gulp.src([FOLDER_DEV + '/less/*.less'])
        .pipe(less())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(FOLDER_BUILD + '/css'))
        .pipe(browserSync.reload({
            stream: true,
            relativeUrls: true
        }));
});

gulp.task('img', function () {
    gulp.src([FOLDER_DEV + '/media/img/*'])
        .pipe(gulp.dest(FOLDER_BUILD + '/media/img'));
});

gulp.task('font', function () {
    gulp.src([FOLDER_DEV + '/media/font/*'])
        .pipe(gulp.dest(FOLDER_BUILD + '/media/font'));
});


gulp.task('bower', function () {
    bower(FOLDER_DEV + '/vendor')
        .pipe(gulp.dest(FOLDER_BUILD + '/vendor'));
}); 

gulp.task('clean', function () {
    gulp.src(FOLDER_BUILD, {read: false})
        .pipe(clean());    
});

gulp.task('server', function () {
    exec('node server/app.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

/*gulp.task('browserify', function() {
    browserify(FOLDER_DEV + '/js/app.js')
        .bundle()
        // Передаем имя файла, который получим на выходе, vinyl-source-stream
        .pipe(source('app.js'))
        .pipe(gulp.dest(FOLDER_BUILD + '/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});*/

/*gulp.task('lint', function() {
    gulp.src([FOLDER_DEV + '/js/*.js'])
        .pipe(jshint())
        .pipe( jshint.reporter('gulp-jshint-file-reporter') );
});*/

gulp.task('watch', ['build', 'browserSync'], function () {
    
    gulp.watch(FOLDER_DEV + '/**/*.html', ['html']);
    gulp.watch(FOLDER_DEV + '/js/**/*.js', ['js']);
    gulp.watch(FOLDER_DEV + '/less/*.less', ['less']);
});

gulp.task('build', function () {
    //gulp.run('clean');
    //gulp.run('browserify');
    
    gulp.run('html');
    gulp.run('js');
    gulp.run('less');
    gulp.run('img');
    gulp.run('font');
    gulp.run('bower');
	
	gulp.run('server');
});