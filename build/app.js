"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("Welcome to Know Africa");
});
app.listen(port, function () {
  console.log("Server Running on: ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map