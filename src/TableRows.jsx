import React, {PropTypes} from 'react';
import classNames from 'classnames';
import TableRow from '../src/TableRow';
import TableRowContent from '../src/TableRowContent';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: PropTypes.func
};

const defaultProps = {
  onClick: undefined
};

function cloneChildItems(children, height, onClick) {
	return children.map((child) => {
		let newProps = {height: height};
		if(onClick) {
			newProps.onClick = onClick;
		}
		if(child.type === TableRow) {
			return React.cloneElement(child, newProps)
		}
		else {
			return child;
		}
	});
};

const TableRows = ({
	children,
	height,
	onClick,
	...customProps
}) => {
	let cloneChildren = cloneChildItems(children, height, onClick);
	return (
		<tbody {...customProps}>
			{cloneChildren}
		</tbody>
	);
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

export default TableRows;