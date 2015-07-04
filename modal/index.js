'use strict';
var furl = require('foso-url')(__dirname);
var writeScript = require('write-script');

module.exports = {
  id: 'sweet-alert',
  name: 'Sweet Alert',
  setup: function() {
    writeScript(furl('main.js'));
  }
};
