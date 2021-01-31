var babelCore = require("@babel/core");
var sourceCode = `let fn = (num) => num + 2`;

var options = {
  code: true, //是否生成解析的代码
  ast: true, //是否生成抽象语法树
  sourceMaps: true, //是否生成sourceMap
  plugins: [],
  presets: [],
};

babelCore.transform(sourceCode, options, function (err, result) {
  console.log("source code：");
  console.log(sourceCode);
  console.log("==========");
  console.log("result code：");
  console.log(result.code);
  console.log("==========");
  console.log("result map：");
  console.log(result.map);
  console.log("==========");
  console.log("result ast：");
  console.log(result.ast);
});
