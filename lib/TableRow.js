'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableRowContent = require('../src/TableRowContent');

var _TableRowContent2 = _interopRequireDefault(_TableRowContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
	children: _react.PropTypes.arrayOf(_react.PropTypes.element),
	isSelected: _react.PropTypes.bool,
	height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
	onClick: _react.PropTypes.func
};

var defaultProps = {
	isSelected: false
};

function cloneChildItems(children, height) {
	var childrenArray = _react2.default.Children.toArray(children);
	if (childrenArray.length > 16) console.log('Number of Columns are ' + _react2.default.Children.count(children) + '. This is more than columns limit');
	return childrenArray.filter(function (child, index) {
		return index < 16;
	}).map(function (child) {
		if (child.type === _TableRowContent2.default) {
			return _react2.default.cloneElement(child, { height: height });
		} else {
			return child;
		}
	});
};

var TableRow = function TableRow(_ref) {
	var children = _ref.children,
	    isSelected = _ref.isSelected,
	    height = _ref.height,
	    onClick = _ref.onClick,
	    customProps = _objectWithoutProperties(_ref, ['children', 'isSelected', 'height', 'onClick']);

	var rowClassNames = (0, _classnames2.default)([{ 'terra-Table--isSelected': isSelected }]);

	var cloneChildren = cloneChildItems(children, height);
	return _react2.default.createElement(
		'tr',
		_extends({ className: rowClassNames, onClick: onClick }, customProps),
		cloneChildren
	);
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

exports.default = TableRow;