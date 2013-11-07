
var bumpy = require('..');
var assert = require('better-assert');
var fs = require('fs');
var path = require('path');
var fixture = path.join.bind(path, __dirname, 'fixtures');
var read = fs.readFileSync;

var originals = {
  'component.json': read(fixture('component.json')),
  'package.json': read(fixture('package.json')),
  'foo.json': read(fixture('foo.json'))
};

var files = bumpy.files;

describe('bumpy', function () {
  // reset
  afterEach(function () {
    for (var file in originals) {
      fs.writeFileSync(fixture(file), originals[file]);
    }
    bumpy.files = files;
  });

  it('should bump patch numbers', function (done) {
    bumpy(fixture(), 'patch', function (err) {
      if (err) return done(err);
      assert('0.0.1' === version('component.json'));
      assert('0.0.1' === version('package.json'));
      done();
    });
  });

  it('should bump minor numbers', function (done) {
    bumpy(fixture(), 'minor', function (err) {
      if (err) return done(err);
      assert('0.1.0' === version('component.json'));
      assert('0.1.0' === version('package.json'));
      done();
    });
  });

  it('should bump major numbers', function (done) {
    bumpy(fixture(), 'major', function (err) {
      if (err) return done(err);
      assert('1.0.0' === version('component.json'));
      assert('1.0.0' === version('package.json'));
      done();
    });
  });

  it('should allow for clobbering defaults files', function (done) {
    bumpy.files.push('foo.json');
    bumpy(fixture(), 'major', function (err) {
      if (err) return done(err);
      assert('1.0.0' === version('component.json'));
      assert('1.0.0' === version('package.json'));
      assert('1.0.0' === version('foo.json'));
      done();
    });
  });
});

function version(file) {
  return JSON.parse(read(fixture(file))).version;
}
