"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var LsProgressCircle = function LsProgressCircle(props) {
  var _props$width = props.width,
      width = _props$width === void 0 ? 80 : _props$width,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 10 : _props$strokeWidth,
      percent = props.percent;
  var strokeColor = props.strokeColor || {
    '0': '#ed5e1e',
    '100': '#ff9a5a'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ls-progress-circle",
    style: {
      width: '80px',
      height: '80px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Progress, {
    type: "circle",
    strokeColor: {
      '0%': strokeColor[0],
      '100%': strokeColor[100]
    },
    percent: percent,
    showInfo: false,
    width: width,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "lable"
  }, props.children));
};

var _default = LsProgressCircle;
exports.default = _default;