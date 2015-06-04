'use strict';

module.exports = {
  id: '1',
  name: 'Background Change',
  ac: function() {
    // assign the experiment only to users that are using Chrome
    return !!window.chrome;
  },
  setup: function() {
    require('./bg.less');
  }
};