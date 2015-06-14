'use strict';

var furl = require('fosify-url')(__dirname);
var loadScript = require('../load-script');

module.exports = {
  id: 'sweet-alert',
  name: 'Sweet Alert',
  setup: function() {
    loadScript(furl('main.js'));
  }
};
