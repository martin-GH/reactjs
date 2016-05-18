var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');
var browserify = require('browserify');
var autoprefixer = require('gulp-autoprefixer');

var dir = {
  source: 'client/',
  dest: 'public/',
}
var bootstrapSass = {
  in: './node_modules/bootstrap-sass/'
};
var fonts = {
  in: [
    dir.source + 'fonts/*.*',
    bootstrapSass.in + 'assets/fonts/**/*',
  ],
  out: dir.dest + 'fonts/'
};
var scss = {
  in: dir.source + 'scss/main.scss',
  out: dir.dest + 'css/',
  watch: dir.source + 'scss/**/*',
  sassOpts: {
    outputStyle: 'nested',
    precison: 3,
    errLogToConsole: true,
    includePaths: [bootstrapSass.in + 'assets/stylesheets']
  }
};

watchify.args.debug = true;
var bundler = watchify(browserify('./client/main.js', watchify.args));

bundler.transform(babelify.configure({
  presets: ["es2015", "react"]
}));

bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function (err) {
      gutil.log(err.message);
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(dir.dest));
}

gulp.task('bundle', function () {
  return bundle();
});

gulp.task('fonts', function() {
  return gulp.src(fonts.in)
    .pipe(gulp.dest(fonts.out));
});

gulp.task('sass', ['fonts'], function() {
  return gulp.src(scss.in)
    .pipe(sass(scss.sassOpts).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(scss.out));
});

gulp.task('default', ['bundle','sass'], function () {
  gulp.watch(scss.watch, ['sass']);
});