'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableHeader = require('../src/TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableHeaderContent = require('../src/TableHeaderContent');

var _TableHeaderContent2 = _interopRequireDefault(_TableHeaderContent);

var _TableRows = require('../src/TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

var _TableRow = require('../src/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableRowContent = require('../src/TableRowContent');

var _TableRowContent2 = _interopRequireDefault(_TableRowContent);

var _SingleSelectableRows = require('../src/SingleSelectableRows');

var _SingleSelectableRows2 = _interopRequireDefault(_SingleSelectableRows);

require('../src/table.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _react.PropTypes.arrayOf(_react.PropTypes.element).isRequired,
  isStripped: _react.PropTypes.bool
};

var defaultProps = {
  isStripped: true
};

var Table = function Table(_ref) {
  var children = _ref.children,
      isStripped = _ref.isStripped,
      customProps = _objectWithoutProperties(_ref, ['children', 'isStripped']);

  var tableClassNames = (0, _classnames2.default)(['terra-Table', { 'terra-Table--striped': isStripped }, customProps.className]);
  return _react2.default.createElement(
    'table',
    _extends({}, customProps, { className: tableClassNames }),
    children
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.Rows = _TableRows2.default;
Table.Header = _TableHeader2.default;
Table.HeaderContent = _TableHeaderContent2.default;
Table.Row = _TableRow2.default;
Table.RowContent = _TableRowContent2.default;
Table.SingleSelectableRows = _SingleSelectableRows2.default;

exports.default = Table;