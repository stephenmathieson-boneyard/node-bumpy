
# bumpy

  Bump version numbers in your `.json` files.  Sorry for the stupid name.

## Installation

    $ npm install bumpy -g

## Usage

  Type `bumpy {release}`, where `{release}` is either `{major}`, `{minor}` or `{patch}`.  It'll do what you expect it to.

## Another one of these -- seriousy?

  Yep.  I wanted something more configureable than *insert name here*.

## But I want to bump versions for *insert package manager here* too!

  Just add/edit your `~/.bumpyrc` file like so:

```js
{
  "files": [
    "whatever.json",
    "package.json",
    "component.json",
    "bower.json"
  ]
}
```

  FYI - this can be ignored with an `-i|--ignore` flag.

## License 

(The MIT License)

Copyright (c) 2013 Stephen Mathieson &lt;me@stephenmathieson.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.