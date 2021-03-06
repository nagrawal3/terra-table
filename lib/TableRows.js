'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _react.PropTypes.node,
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: _react.PropTypes.func
};

var defaultProps = {
  onClick: undefined
};

function cloneChildItems(children, height, onClick) {
  return children.map(function (child) {
    var newProps = { height: height };
    if (onClick) {
      newProps.onClick = onClick;
    }
    if (child.type === _TableRow2.default) {
      return _react2.default.cloneElement(child, newProps);
    }
    return child;
  });
}

var TableRows = function TableRows(_ref) {
  var children = _ref.children,
      height = _ref.height,
      onClick = _ref.onClick,
      customProps = _objectWithoutProperties(_ref, ['children', 'height', 'onClick']);

  var cloneChildren = cloneChildItems(children, height, onClick);
  return _react2.default.createElement(
    'tbody',
    customProps,
    cloneChildren
  );
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

exports.default = TableRows;