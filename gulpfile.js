var gulp = require('gulp'),
    concat = require('gulp-concat'),  
    rename = require('gulp-rename'), 
    uglify = require('gulp-uglify'),  
    sourcemaps = require('gulp-sourcemaps'),
    lessSourceMap = require('gulp-sources-less'),
    lessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new lessPluginCleanCSS({ advanced:"true", compatibility: 'ie8'}),

    jsFiles = 'scripts/**/*.js',  
    lessFiles = 'css/**/*.less', 
    Dest = 'dist'

gulp.task('default', ['minifyJs', 'minifyCss', 'watch'] )

gulp.task('minifyJs', function() {  
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('fys-concat.js'))
    .pipe(gulp.dest(Dest))
    .pipe(rename('fys-min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(Dest))
})

gulp.task('minifyCss', function() { 
  return gulp.src(lessFiles)
    .pipe(concat('fys-concat.css'))
    .pipe(gulp.dest(Dest))
    .pipe(lessSourceMap({
        plugins: [cleancss]
    }))      
    .pipe(rename('fys-min.css'))
    .pipe(gulp.dest(Dest))        
})

gulp.task('watch', function(){
  gulp.watch(jsFiles, ['default'])
})