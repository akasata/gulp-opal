var through = require('through2');
var PluginError = require('plugin-error');
var replaceExtension = require('replace-ext');

const PLUGIN_NAME = 'gulp-opal';

// Load Opal
const OPAL_VERSION = '0.7.1';
require('./lib/' + OPAL_VERSION + '/opal.min');
require('./lib/' + OPAL_VERSION + '/opal-parser.min');

function gulpOpal(opt) {
    var stream = through.obj(function (file, enc, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return callback();
        }

        var sourceCode = file.contents.toString('utf8');
        var compiledSourceCode = Opal.compile(sourceCode);

        var dest = replaceExtension(file.path, '.js');
        file.path = dest;
        file.contents = new Buffer(compiledSourceCode);
        this.push(file);

        return callback();
    });

    return stream;
}

module.exports = gulpOpal;
