'use strict';

var fbLike = require('./facebook-like.html');
var domready = require('domready');

function setup() {
  domready(function() {
    document.querySelector('body').innerHTML += fbLike;

    require('./facebook-sdk');
  });
}

module.exports = setup;
