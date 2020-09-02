"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("Welcome to Know Africa");
});
app.listen(port, function () {
  console.log("Server Running on: ".concat(port));
});