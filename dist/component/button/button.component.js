"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Button = function Button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "ls-btn"
  }, props.name);
};

var _default = Button;
exports.default = _default;