'use strict';

var fbLike = require('./facebook-like.html');

module.exports = {
  id: 'fb-like',
  name: 'Facebook Like',
  setup: function() {
    document.querySelector('body').innerHTML += fbLike;

    require('./facebook-sdk');
  }
};
