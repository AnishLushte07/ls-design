"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCustomValues = exports.withDefault = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

require("../../styles/lsProgressCircle/index.less");

// import '../../../node_modules/antd/lib/progress/style/index.less';
var _default = {
  title: 'Progress Circle',
  decorators: [_addonKnobs.withKnobs]
};
exports.default = _default;

var withDefault = function withDefault() {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    percent: 84
  }, /*#__PURE__*/_react.default.createElement("h3", null, "84%"));
};

exports.withDefault = withDefault;

var withCustomValues = function withCustomValues() {
  var width = (0, _addonKnobs.number)('Circle diameter', 100);
  var strokeWidth = (0, _addonKnobs.number)('Stroke widht', 12);
  var percent = (0, _addonKnobs.number)('Percent', 46);
  var strokeColor = (0, _addonKnobs.object)('Stroke gradient', {
    '0': '#108ee9',
    '100': '#87d068'
  });
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    width: width,
    strokeWidth: strokeWidth,
    percent: percent,
    strokeColor: strokeColor
  }, /*#__PURE__*/_react.default.createElement("h3", null, percent, "%"));
};

exports.withCustomValues = withCustomValues;