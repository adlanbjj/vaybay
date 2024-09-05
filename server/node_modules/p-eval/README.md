
<!--#echo json="package.json" key="name" underline="=" -->
p-eval
======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Evil eval() in a promise, with the stack cut.
<!--/#echo -->


API
---

This module exports one function:

### pEval(code)

Returns a promise for `eval(code)`.



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
