"use strict";

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// import "core-js";
Object.assign({}, {});
[(1, 5, 10, 15)].filter(function (value) {
  return value > 8;
});
var promise = new Promise(function (resolve, reject) {
  resolve(1);
});
