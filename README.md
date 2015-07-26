# load-templates [![NPM version](https://badge.fury.io/js/load-templates.svg)](http://badge.fury.io/js/load-templates)  [![Build Status](https://travis-ci.org/jonschlinkert/load-templates.svg)](https://travis-ci.org/jonschlinkert/load-templates)

> Load templates.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i load-templates --save
```

## Usage

```js
var Loader = require('load-templates');
var loader = new Loader();
```

Pass a string or array of globs or file paths, or an object to the load method:

```js
loader.load('a.md', {a: 'b'});
loader.load('*.md', {a: 'b'});
loader.load(['*.md'], {a: 'b'});
loader.load({path: 'a.md', a: 'b'});
loader.load({'a.md': {path: 'a.md', a: 'b'}});
```

And get shiny, normalized template objects back:

```js
{ 'a.md': {path: 'a.md', content: 'this is content.', a: 'b'},
  'b.md': {path: 'b.md', content: 'this is content.', a: 'b'},
  'c.md': {path: 'c.md', content: 'this is content.', a: 'b'}}
```

## Options

### options.relative

Type: `Boolean`

Default: `undefined`

When `false` paths will not be made relative to the current working directory.

### Valid formats

See [the docs](./docs/conventions.md) and [tests](./tests) for valid formats. WIP.

## Coverage

```sh
-------------------|-----------|-----------|-----------|-----------|
File               |   % Stmts |% Branches |   % Funcs |   % Lines |
-------------------|-----------|-----------|-----------|-----------|
   load-templates/ |     98.65 |     95.06 |       100 |     98.61 |
      index.js     |     98.65 |     95.06 |       100 |     98.61 |
-------------------|-----------|-----------|-----------|-----------|
All files          |     98.65 |     95.06 |       100 |     98.61 |
-------------------|-----------|-----------|-----------|-----------|
```

## Related projects

* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](http://assemble.io)
* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)
* [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/load-templates/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2014-2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on July 26, 2015._

<!-- deps:mocha -->