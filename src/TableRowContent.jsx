import React, {PropTypes} from 'react';
import classNames from 'classnames';

const propTypes = {
	display: PropTypes.any.isRequired
};

const TableRowContent = ({
	display,
	height,
	...customProps
	}) => {
	let contentClassName = classNames([
		{['terra-Table-height-'+height]: height},
		'terra-Table-content'
	]);
	return (
		<td {...customProps}>
			<div className={contentClassName}>{display}</div>
		</td>
	);
};

TableRowContent.propTypes = propTypes;

export default TableRowContent;