// Requirements
var sass = require('node-sass');
var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

function compileSass(options = {}) {
    // set default options
    options = Object.assign({
        style: 'expanded'
    }, options);

    // render the result
    var result = sass.renderSync({
        file: options.src,
        outputStyle: options.style
    });

    // write the result to file
    mkdirp(getDirName(options.dest), function(err) {
        if (err) return cb(err);
        fs.writeFile(options.dest, result.css);
    });

    // log successful compilation to terminal
    console.log(' ' + options.dest + ' built.');
};

// Expanded
compileSass({
    src : 'public/assets/sass/main.scss',
    dest: 'public/assets/css/main.css'
});

// Minified
compileSass({
    src : 'public/assets/sass/main.scss',
    dest : 'public/assets/css/main.min.css',
    style: 'compressed'
});