import React, {PropTypes} from 'react';
import classNames from 'classnames';
import TableHeaderContent from '../src/TableHeaderContent';

const propTypes = {
  	onClick: PropTypes.func,
	height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
	children: PropTypes.node.isRequired
};

const defaultProps = {
  	onClick: undefined
};

function renderChildren(children, height, onClick, ...customProps) {
	let childrenArray = React.Children.toArray(children);
	if(childrenArray.length > 16)
		console.log('Number of Columns are '+React.Children.count(children) +'. This is more than columns limit');
	return childrenArray.filter((child, index) => {
		return (index < 16);
	}).map(child => {
		if(child.type === TableHeaderContent) {
			return React.cloneElement(child, {
				height: height,
				onClick: onClick,
				...customProps
			});
		}
		else
			return child;
	});
};

const TableHeader = ({
	children,
	height,
	onClick,
	...customProps
	}) => {
	return (
		<thead>
			<tr>
		    	{renderChildren(children, height, onClick, ...customProps)}
		    </tr>
		</thead>
	);
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;