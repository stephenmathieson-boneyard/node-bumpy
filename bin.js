#!/usr/bin/env node

var bumpy = require('./bumpy');
var path = require('path');
var home = require('home-dir').directory;
var fs = require('fs');

var releases = [ 'major', 'minor', 'patch' ];
var release = process.argv[2];
var ignore = '--ignorerc' === process.argv[3] || '-i' === process.argv[3];

process.title = 'bumpy';

if ('--help' === release || '-h' === release) return usage();
if ('--version' === release || '-v' === release) return version();

if (!~releases.indexOf(release)) {
  return error([
    'Invalid or missing release.  Must be one of the following:',
    '  ' + releases.join(', ')
  ].join('\n'));
}

// config file support
if (!ignore) {
  try {
    var rc = path.join(home, '.bumprc');
    var data = fs.readFileSync(rc);
    var json = JSON.parse(data);
    var files = json.files;
    if (files && files.length) {
      bumpy.files = files;
    }
  } catch (err) {
    if ('ENOENT' !== err.code) {
      return error(err.message);
    }
  }
}

bumpy(process.cwd(), release, function (err) {
  if (err) return error(err.message);
});


/**
 * Output the given error `msg`
 */

function error(msg) {
  console.error(msg);
  process.exit(1);
}

/**
 * Output usage information
 */

function usage() {
  console.log([
    '',
    '  Usage: bumpy <release> [options]',
    '',
    '  Releases:',
    '',
    '    - major',
    '    - minor',
    '    - patch',
    '',
    '  Options:',
    '',
    '    -h, --help           output usage information',
    '    -V, --version        output the version number',
    '    -i, --ignore         ignore settings in ~/.bumpyrc',
    ''
  ].join('\n'));
  process.exit(0);
}

/**
 * Output the current version
 */

function version() {
  console.log('v' + require('./package.json').version);
  process.exit(0);
}
