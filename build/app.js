"use strict";

<<<<<<< HEAD
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

=======
var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

>>>>>>> fe44d5b... chore(procfile) -configured procfile
var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("Welcome to Know Africa");
});
app.listen(port, function () {
  console.log("Server Running on: ".concat(port));
<<<<<<< HEAD
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map
=======
});
>>>>>>> fe44d5b... chore(procfile) -configured procfile
