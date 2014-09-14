/*!
 * load-templates <https://github.com/jonschlinkert/load-templates>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var Loader = require('..');
var loader;


describe('.findPath()', function () {
  beforeEach(function() {
    loader = new Loader();
  });

  describe('when the first and second args are strings:', function () {
    it('should return the first argument.', function () {
      loader.findPath('abc.md', 'this is content').should.equal('abc.md');
    });
  });

  describe('when the first arg is an object:', function () {
    it('should return a `path` property if found directly on the object.', function () {
      loader.findPath({path: 'abc.md', content: 'this is content'}).should.equal('abc.md');
    });

    it('should return a nested `path` property on the first object:', function () {
      loader.findPath({'abc.md': {path: 'foo/bar.md', content: 'this is content'}}).should.equal('foo/bar.md');
    });

    it.skip('should throw an error if a `path` was not found:', function () {
      loader.findPath({'abc.md': {content: 'this is content'}, 'def.md': {path: 'foo/bar.md', }}).should.equal('foo/bar.md');
    });
  });

  describe('when the first object only has one key:', function () {
    describe('when the key matches path-like regexp patterns:', function () {
      it('should return the key of the first object as a last resort.', function () {
        loader.findPath({'abc.md': {content: 'this is content'}}).should.equal('abc.md');
      });
    });
    describe.skip('when the key does NOT match path-like regexp patterns:', function () {
      it('should throw an error, since all other alternatives were exhausted.', function () {
        loader.findPath({'abcmd': {content: 'this is content'}}).should.equal('abc.md');
      });
    });
  });
});

