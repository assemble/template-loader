'use strict';

var path = require('path');
var segments = require('path-segments');
var _ = require('lodash');

/**
 * ## .typeOf
 *
 * Return a string indicating the type of the given value.
 *
 * @method `typeOf`
 * @param {*} `value` The value to check.
 * @return {*} The "type" of value.
 * @api private
 */

exports.typeOf = function(value) {
  return Object.prototype.toString.call(value)
    .toLowerCase()
    .replace(/\[object ([\S]+)\]/, '$1');
};


/**
 * Naming function, to enable customizing how
 * template names are derived from file paths.
 *
 * See the [segments] library for more detail.
 *
 * [segments]: https://github.com/jonschlinkert/path-segments
 *
 * @param  {String} `filepath`
 * @param  {Object} `options` Options to pass to [segments]
 * @return {Object}
 */

exports.name = function(filepath, options) {
  var opts = _.extend({last: 1, withExt: false}, options);
  var res = segments(filepath, opts);
  if (opts.withExt) {
    return res.replace(/(\.)/g, '\\$1');
  }
  return res.replace(/\.[\S]+$/, '');
};


/**
 * Resolve a filepath.
 *
 * @param  {String} `filepath`
 * @return {String} Absolute filepath.
 */

exports.absolute = function(filepath) {
  return path.resolve(filepath);
};
