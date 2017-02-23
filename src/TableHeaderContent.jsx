import React, {PropTypes} from 'react';
import classNames from 'classnames';

const propTypes = {
	display: PropTypes.any.isRequired,
	minWidth: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
};

const defaultProps = {
	minWidth: 'small'
}

const TableHeaderContent = ({
	display,
	height,
	minWidth,
	sort,
	onClick,
	...customProps
	}) => {
	let headerContentClassNames = classNames([
			{['terra-Table-headerHeight-'+height]: height},
			'terra-Table-content'
		]);

	let contentClassName = classNames([
			{['terra-Table-width-'+minWidth]: minWidth}
		]);
	let ascSortInd = classNames([
			{['terra-Table-sort-indicator']: sort==='asc'},
			{'terra-Table-hidden': sort!=='asc'},
		]);

	let descSortInd = classNames([
			{['terra-Table-sort-indicator']: sort==='desc'},
			{'terra-Table-hidden': sort!=='desc'},
		]);

	return (
		<th scope="col" onClick = {onClick} className = {contentClassName} {...customProps}>
			<div className = {headerContentClassNames}>
				{display}
				<span className = {ascSortInd}>↑</span>
				<span className = {descSortInd}>↓</span>
			</div>
		</th>
	);
};

TableHeaderContent.propTypes = propTypes;
TableHeaderContent.defaultProps = defaultProps;

export default TableHeaderContent;