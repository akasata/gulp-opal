require('mocha');
var expect = require('expect.js')

var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');

// Load Opal
const OPAL_VERSION = '0.7.1';
require('../lib/' + OPAL_VERSION + '/opal.min');
require('../lib/' + OPAL_VERSION + '/opal-parser.min');
var opal = require('../');

describe('gulp-opal', function() {
    it('transpile a file', function(){
        var filepath = './test/ruby/hoge_class.rb';
        var base = path.dirname(filepath);
        var contents = new Buffer(fs.readFileSync(filepath));
        var expectedSourceCode = Opal.compile(contents.toString('utf8'));

        opal().on('data', function(newFile) {
            var sourceCode = newFile.contents.toString('utf8');
            expect(sourceCode).to.be(expectedSourceCode);
        }).write(
            new gutil.File({
                path: filepath,
                base: base,
                cwd: path.dirname(base),
                contents: contents
            })
        );
    });
});

