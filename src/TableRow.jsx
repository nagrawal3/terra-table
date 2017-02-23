import React, {PropTypes} from 'react';
import classNames from 'classnames';
import TableRowContent from '../src/TableRowContent';

const propTypes = {
  	
};

const defaultProps = {
  	
};

function renderChildren(children, height) {
	let childrenArray = React.Children.toArray(children);
	if(childrenArray.length > 16)
		console.log('Number of Columns are '+React.Children.count(children) +'. This is more than columns limit');
	return childrenArray.filter((child, index) => {
		return (index < 16);
	}).map(child => {
		if(child.type === TableRowContent) {
			return React.cloneElement(child, {
				height: height
			});
		}
		else
			return child
	});
};

const TableRow = ({
	children,
	isSelected,
	height,
	onClick,
	...customProps
	}) => {
	let rowClassNames = classNames([
			{'terra-Table--isSelected': isSelected}
		]);
	return (
		<tr className = {rowClassNames} onClick = {onClick} {...customProps}>
			{renderChildren(children, height)}
        </tr>
	);
};
export default TableRow;