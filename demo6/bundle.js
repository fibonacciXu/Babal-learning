"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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
