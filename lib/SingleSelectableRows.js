'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableRows = require('../src/TableRows');

var _TableRows2 = _interopRequireDefault(_TableRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	children: _react.PropTypes.arrayOf(_react.PropTypes.element),
	height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
	onClick: _react.PropTypes.func,
	isSelectable: _react.PropTypes.bool
};

var defaultProps = {
	onClick: undefined,
	isSelectable: true
};

var SingleSelectableRows = function (_React$Component) {
	_inherits(SingleSelectableRows, _React$Component);

	_createClass(SingleSelectableRows, [{
		key: 'handleSelection',
		value: function handleSelection(event, index) {
			this.setState({ selectedIndex: index });
		}
	}, {
		key: 'shouldHandleSelection',
		value: function shouldHandleSelection(index) {
			return index !== this.state.selectedIndex;
		}
	}, {
		key: 'wrappedOnClickForRow',
		value: function wrappedOnClickForRow(row, index) {
			var _this2 = this;

			var initialOnClick = this.props.onClick;

			return function (event) {
				if (_this2.props.isSelectable && _this2.shouldHandleSelection(index)) {
					_this2.handleSelection(event, index);
				}

				if (initialOnClick) {
					initialOnClick(event);
				}
			};
		}
	}, {
		key: 'newPropsForRow',
		value: function newPropsForRow(row, index, onClick) {
			var isSelected = this.state.selectedIndex === index;

			var newProps = { onClick: onClick };

			// set the isSelected to false for all the rows except the row whose index is set to state selectedIndex
			if (isSelected !== row.isSelected) {
				newProps.isSelected = isSelected;
			}

			return newProps;
		}
	}, {
		key: 'clonedChildItems',
		value: function clonedChildItems(rows) {
			var _this3 = this;

			return rows.map(function (row, index) {
				var wrappedOnClick = _this3.wrappedOnClickForRow(row, index);
				var newProps = _this3.newPropsForRow(row, index, wrappedOnClick);
				return _react2.default.cloneElement(row, newProps);
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var index = SingleSelectableRows.selectedRowIndex(nextProps.children);

			if (index !== this.state.selectedIndex) {
				this.setState({ selectedIndexes: index });
			}
		}
	}], [{
		key: 'selectedRowIndex',
		value: function selectedRowIndex(rows, isSelectable) {
			// Only show selection if rows are selectable
			if (isSelectable) {
				for (var i = 0; i < rows.length; i += 1) {
					if (rows[i].props.isSelected === true) {
						return i;
					}
				}
			}
			return -1;
		}
	}]);

	function SingleSelectableRows(props) {
		_classCallCheck(this, SingleSelectableRows);

		var _this = _possibleConstructorReturn(this, (SingleSelectableRows.__proto__ || Object.getPrototypeOf(SingleSelectableRows)).call(this, props));

		_this.handleSelection = _this.handleSelection.bind(_this);
		_this.state = { selectedIndex: SingleSelectableRows.selectedRowIndex(_this.props.children, _this.props.isSelectable) };
		return _this;
	}

	_createClass(SingleSelectableRows, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    height = _props.height,
			    onClick = _props.onClick,
			    isSelectable = _props.isSelectable,
			    customProps = _objectWithoutProperties(_props, ['children', 'height', 'onClick', 'isSelectable']);

			var clonedChilItems = this.clonedChildItems(children);

			return _react2.default.createElement(_TableRows2.default, _extends({ height: height, children: clonedChilItems }, customProps));
		}
	}]);

	return SingleSelectableRows;
}(_react2.default.Component);

;

SingleSelectableRows.propTypes = propTypes;
SingleSelectableRows.defaultProps = defaultProps;

exports.default = SingleSelectableRows;