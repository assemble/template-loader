/*!
 * load-templates <https://github.com/jonschlinkert/load-templates>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');
var utils = require('./utils');

module.exports = function (cache, config, fn) {
  if (typeof cache === 'function') {
    fn = cache;
    config = {};
    cache = undefined;
  }

  if (typeof config === 'function') {
    fn = config;
    config = {};
  }

  cache = cache || {};

  function loadViews(key, val) {
    if (key == null) return {};

    if (utils.isView(val)) {
      return addView(key, val);
    }

    if (utils.isObject(key)) {
      return addViews(key, val);
    }

    val = val || {};
    key = utils.arrayify(key);

    if (!utils.isValidGlob(key)) {
      return addViews(key, val);
    }
    loader(key, val);
    return cache;
  }

  function addView(name, view) {
    cache[name] = view;
    return cache;
  }

  function addViews(views) {
    if (Array.isArray(views)) {
      views.forEach(function (view) {
        loadViews(view);
      });
    } else {
      for (var name in views) {
        addView(name, views[name]);
      }
    }
    return cache;
  }

  function loader(patterns, opts) {
    opts = utils.extend({}, config, opts);
    var files = utils.glob.sync(patterns, opts);
    var len = files.length, i = -1;
    while (++i < len) {
      var name = files[i];
      var stat = utils.tryStat(name, opts);
      if (stat && stat.isFile()) {
        var file = utils.getProps(opts);
        file.stat = stat;
        file.path = opts.cwd ? path.join(opts.cwd, name) : name;
        file.key = utils.renameKey(file.path, opts);
        if (typeof fn === 'function') {
          fn(file);
        }
        loadViews(file.key, file);
      }
    }
    return cache;
  }

  return loadViews;
};
