/*!
 * template-loader <https://github.com/jonschlinkert/template-loader>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

var assert = require('assert');
var should = require('should');
var Loader = require('..');


describe('template load:', function () {
  describe('.load():', function () {
    describe('when template are defined as objects:', function () {

      it('should load templates from objects:', function () {
        var templates = new Loader();
        templates.load({a: {layout: 'b', content: 'A above\n{{body}}\nA below' }});
        var a = templates.get('a');
        assert(typeof a, 'object');

        a.data.should.have.property('layout');
      });

      it('should load multiple templates from objects:', function () {
        var templates = new Loader();
        templates.load({a: {layout: 'b', content: 'A above\n{{body}}\nA below' }});
        templates.load({b: {layout: 'c', content: 'B above\n{{body}}\nB below' }});
        templates.load({c: {layout: 'd', content: 'C above\n{{body}}\nC below' }});

        var a = templates.get('a');
        var b = templates.get('b');
        var c = templates.get('d');

        assert(typeof a, 'object');
      });

      it('should load templates from strings', function () {

      });

      it('should load templates from file paths', function () {

      });

      it('should load templates from arrays of file paths', function () {

      });

      it('should load templates from globs', function () {
        var templates = new Loader();
        templates.load('test/fixtures/*.tmpl');

        templates.cache.should.have.property('a');
        templates.cache.should.have.property('b');
        templates.cache.should.have.property('c');
        templates.cache.should.have.property('d');
        templates.cache.should.have.property('e');
        templates.cache.should.have.property('f');
      });

      it('should load templates from arrays of globs', function () {
        var templates = new Loader();
        templates.load(['test/**/*.md', 'test/**/*.tmpl']);

      });

    });
  });
});