// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');


// File paths
const files = { 
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js',
    assetsPath: 'app/assets/**/*'
}

// Sass task: compiles the style.scss file into style.css
function scssTask(){    
    return src(files.scssPath)
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(dest('dist')
    ); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('dist')
    );
}

function assetsTask(){
    // Keep binary images as buffers; UTF-8 decoding corrupts them.
    return src(files.assetsPath, { encoding: false })
        .pipe(dest('dist'));
}

// Cachebust
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath, files.assetsPath],
        parallel(scssTask, jsTask, assetsTask));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask, assetsTask),
    cacheBustTask,
    watchTask
);

exports.scssTask = scssTask;
exports.jsTask = jsTask;
exports.assetsTask = assetsTask;
exports.cacheBustTask = cacheBustTask;
exports.build = series(
    parallel(scssTask, jsTask, assetsTask)
);
