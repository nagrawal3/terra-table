import React, {PropTypes} from 'react';
import classNames from 'classnames';
import TableRow from '../src/TableRow';
import TableRowContent from '../src/TableRowContent';

function renderChildren(children, height, onClick) {
	return React.Children.map(children, child => {
		if(child.type === TableRow) {
			if(child.props.onClick) {
				return React.cloneElement(child, {
					height: height
				})
			}
			else {
				return React.cloneElement(child, {
					height: height,
					onClick: onClick
				})
			}
		}
		else
			return child
	});
};

const TableRows = ({
	children,
	height,
	onClick,
	...customProps
}) => {
	return (
		<tbody {...customProps}>
			{renderChildren(children, height, onClick)}
		</tbody>
	);
};
export default TableRows;