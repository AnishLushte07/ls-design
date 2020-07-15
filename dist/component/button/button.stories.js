"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withEmoji = exports.withText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

require("../../styles/button/index.less");

var _default = {
  title: 'Button'
};
exports.default = _default;

var withText = function withText() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, "Hello Button");
};

exports.withText = withText;

var withEmoji = function withEmoji() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
    "aria-label": "so cool"
  }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"));
};

exports.withEmoji = withEmoji;