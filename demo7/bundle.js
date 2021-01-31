"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _context;

(0, _filter["default"])(_context = [1, 5, 10, 15]).call(_context, function (value) {
  return value > 9;
});

var Person = /*#__PURE__*/function () {
  function Person(name) {
    (0, _classCallCheck2["default"])(this, Person);
    this.name = name;
  }

  (0, _createClass2["default"])(Person, [{
    key: "say",
    value: function say() {
      console.log("my name is\uFF1A".concat(this.name));
    }
  }]);
  return Person;
}();

var tom = new Person("tom");
tom.say();
var promise = new _promise["default"](function (resolve, reject) {
  resolve(1);
});
