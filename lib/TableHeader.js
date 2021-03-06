'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableHeaderContent = require('./TableHeaderContent');

var _TableHeaderContent2 = _interopRequireDefault(_TableHeaderContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  onClick: _react.PropTypes.func,
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  children: _react.PropTypes.node.isRequired
};

var defaultProps = {
  onClick: undefined
};

function cloneChildItems(children, height, onClick) {
  var newProps = {
    height: height,
    onClick: onClick
  };
  var childrenArray = _react2.default.Children.toArray(children);
  if (childrenArray.length > 16) {
    console.log('Number of Columns are ' + _react2.default.Children.count(children) + '. This is more than columns limit');
  }
  // Filtering children to render only 16 columns
  return childrenArray.filter(function (child, index) {
    return index < 16;
  }).map(function (child) {
    if (child.type === _TableHeaderContent2.default) {
      return _react2.default.cloneElement(child, newProps);
    }
    return child;
  });
}

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children,
      height = _ref.height,
      onClick = _ref.onClick,
      customProps = _objectWithoutProperties(_ref, ['children', 'height', 'onClick']);

  var cloneChildren = cloneChildItems(children, height, onClick);
  return _react2.default.createElement(
    'thead',
    customProps,
    _react2.default.createElement(
      'tr',
      null,
      cloneChildren
    )
  );
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

exports.default = TableHeader;