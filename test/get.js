/*!
 * template-loader <https://github.com/jonschlinkert/template-loader>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

var should = require('should');
var Loader = require('..');


describe('template get:', function () {
  describe('.get():', function () {
    describe('when template are defined as objects:', function () {

      it('should get a `load()`ed template object by name:', function () {
        var templates = new Loader();
        templates.load({a: {content: 'A'}}, {data: {aaa: 'bbb'}});
        templates.get('a').should.have.property('content');
        templates.get('a').should.have.property('data');
      });

      it('should get a `.set()` template object by name:', function () {
        var templates = new Loader();
        templates.set('a', {content: 'A'}, {data: {aaa: 'bbb'}});
        templates.get('a').should.have.property('content');
        templates.get('a').should.have.property('data');
      });

      it('should get a nested property from a template object:', function () {
        var templates = new Loader();
        templates.load({b: {content: 'B'}}, {locals: {bbb: 'ccc', ddd: {eee: 'fff'}}});
        templates.get('b.data').should.have.property('bbb');
        templates.get('b.data.ddd.eee').should.equal('fff');
      });

      it('should get templates from objects:', function () {
        var templates = new Loader();

        templates.load({a: {content: 'A'}}, {data: {aaa: 'bbb'}});
        templates.load({b: {content: 'B'}}, {locals: {bbb: 'ccc'}});
        templates.load({c: {content: 'C'}}, {xxx: 'yyy'});

        templates.get('a').should.have.property('content');
        templates.get('a').should.have.property('data');
        templates.get('b.data').should.have.property('bbb');
        templates.get('c.data').should.have.property('xxx');
        templates.get('b').should.have.property('data');
        templates.get('b').should.not.have.property('locals');
        templates.get('b').should.not.have.property('locals');
      });
    });
  });
});