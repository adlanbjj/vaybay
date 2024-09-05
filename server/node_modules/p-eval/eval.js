/*jslint indent: 2, maxlen: 80, evil: true, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function pEval(code) {
  return new Promise(function scheduleEval(solve, reject) {
    function tryEvalSoon() {
      try {
        return solve(eval(code));
      } catch (err) {
        return reject(err);
      }
    }
    setImmediate(tryEvalSoon);  // cut off the stack.
  });
}

module.exports = pEval;
