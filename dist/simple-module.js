/**
 * simple-module v3.0.5
 * http://mycolorway.github.io/simple-module
 *
 * Copyright Mycolorway Design
 * Released under the MIT license
 * http://mycolorway.github.io/simple-module/license.html
 *
 * Date: 2018-04-24
 */
;(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    root.SimpleModule = factory(root.jQuery);
  }
}(this, function ($) {
var define, module, exports;
var b = require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"simple-module":[function(require,module,exports){
var SimpleModule,
  slice = [].slice;

SimpleModule = (function() {
  SimpleModule.extend = function(obj) {
    var key, ref, val;
    if (!(obj && typeof obj === 'object')) {
      throw new Error('SimpleModule.extend: param should be an object');
    }
    for (key in obj) {
      val = obj[key];
      if (key !== 'included' && key !== 'extended') {
        this[key] = val;
      }
    }
    if ((ref = obj.extended) != null) {
      ref.call(this);
    }
    return this;
  };

  SimpleModule.include = function(obj) {
    var key, ref, val;
    if (!(obj && typeof obj === 'object')) {
      throw new Error('SimpleModule.include: param should be an object');
    }
    for (key in obj) {
      val = obj[key];
      if (key !== 'included' && key !== 'extended') {
        this.prototype[key] = val;
      }
    }
    if ((ref = obj.included) != null) {
      ref.call(this);
    }
    return this;
  };

  SimpleModule.plugins = {};

  SimpleModule.plugin = function(name, cls) {
    if (!(name && typeof name === 'string')) {
      throw new Error('SimpleModule.plugin: first param should be a string');
    }
    if (typeof cls !== 'function') {
      throw new Error('SimpleModule.plugin: second param should be a class');
    }
    this.plugins[name] = cls;
    return this;
  };

  SimpleModule.opts = {
    plugins: []
  };

  SimpleModule.prototype.plugins = {};

  function SimpleModule(opts) {
    this.opts = $.extend({}, SimpleModule.opts, opts);
    this.opts.plugins.forEach((function(_this) {
      return function(name) {
        return _this.plugins[name] = new SimpleModule.plugins[name](_this);
      };
    })(this));
  }

  SimpleModule.prototype.on = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = $(this)).on.apply(ref, args);
  };

  SimpleModule.prototype.off = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = $(this)).off.apply(ref, args);
  };

  SimpleModule.prototype.trigger = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = $(this)).triggerHandler.apply(ref, args);
  };

  SimpleModule.prototype.one = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = $(this)).one.apply(ref, args);
  };

  return SimpleModule;

})();

module.exports = SimpleModule;

},{}]},{},[]);

return b('simple-module');
}));
