var UglifyJS = require('uglify-js');
var fs = require('fs');

var result = UglifyJS.minify(["app.js"]);
fs.writeFileSync('DuccBOX.min.js', result.code);