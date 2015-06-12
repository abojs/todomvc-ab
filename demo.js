'use strict';

function demo(expt) {
  if (!expt) {
    throw new Error('expt is required');
  }

  console.log('Demo of experiment "' + expt.id + ': ' + expt.name + '"');

  if (typeof expt.ac !== 'undefined') {
    if (typeof expt.ac === 'function') {
      console.log('Assignment condtion returned ', expt.ac());
    } else {
      console.log('Assignment condition is ', expt.ac);
    }
  }

  if (typeof expt.setup === 'function') {
    console.log('Running setup');
    expt.setup();
  }
}

module.exports = demo;
