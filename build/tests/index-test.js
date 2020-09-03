"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

// assertion style
_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe("app.js should return all endpoints", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          describe("/ should display Welcome to Know Africa", function () {
            it("it should get the welcome page", function (done) {
              _chai["default"].request(_app["default"]).get("/").end(function (err, res) {
                res.should.have.status(200);
                done();
              });
            });
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var _default = describe;
exports["default"] = _default;
//# sourceMappingURL=index-test.js.map