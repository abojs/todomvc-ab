'use strict';

var domready = require('domready');

module.exports = {
  id: 'copy-change',
  name: 'Copy Change',
  setup: function() {
    var html = document.getElementsByTagName('html')[0];
    html.style.visibility = 'hidden';
    
    domready(function() {
      document.querySelector('#header h1').innerHTML = 'Copy change experiment';
      html.style.visibility = '';
    });
  }
};
