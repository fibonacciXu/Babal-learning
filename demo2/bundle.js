var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

let fun = function fun() {
  _newArrowCheck(this, _this);

  return console.log('hello babel.js');
}.bind(this);
