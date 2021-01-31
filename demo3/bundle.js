"use strict";

require("core-js/modules/es.object.assign.js");

var _this = void 0;

let fun = function () {
  return console.log("hello babel.js", _this);
};

class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`my name is：${this.name}`);
  }

}

Object.assign({}, {});
const tom = new Person("tom");
tom.say();
