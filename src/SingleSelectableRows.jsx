import React, {PropTypes} from 'react';
import classNames from 'classnames';
import TableRows from '../src/TableRows';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: PropTypes.func,
  isSelectable: PropTypes.bool
};

const defaultProps = {
  onClick: undefined,
  isSelectable: true
};

class SingleSelectableRows extends React.Component {
	static selectedRowIndex(rows, isSelectable) {
		// Only show selection if rows are selectable
		if(isSelectable) {
			for (let i = 0; i < rows.length ; i += 1) {
		      if (rows[i].props.isSelected === true) {
		        return i;
		      }
		    }
		}
	  return -1;
	}

	handleSelection(event, index) {
	  this.setState({ selectedIndex: index });
	}

	shouldHandleSelection(index) {
	  return index !== this.state.selectedIndex;
	}

	wrappedOnClickForRow(row, index) {
		const initialOnClick = this.props.onClick;

		return (event) => {
			if(this.props.isSelectable && this.shouldHandleSelection(index)) {
				this.handleSelection(event, index);
			}

			if(initialOnClick) {
				initialOnClick(event);
			}
		}
	}

	newPropsForRow(row, index, onClick) {
		const isSelected = this.state.selectedIndex === index;

		let newProps = {onClick: onClick};

		// set the isSelected to false for all the rows except the row whose index is set to state selectedIndex
		if (isSelected !== row.isSelected) {
	      newProps.isSelected = isSelected;
	    }

	  return newProps;
	}

	clonedChildItems(rows) {
		return rows.map((row, index) => {
			const wrappedOnClick = this.wrappedOnClickForRow(row, index);
			const newProps = this.newPropsForRow(row, index, wrappedOnClick)
			return React.cloneElement(row, newProps);
		})
	}

	componentWillReceiveProps(nextProps) {
    const index = SingleSelectableRows.selectedRowIndex(nextProps.children);

    if (index !== this.state.selectedIndex) {
      this.setState({ selectedIndexes: index });
    }
	}

	constructor(props) {
		super(props);
		this.handleSelection = this.handleSelection.bind(this);
		this.state = {selectedIndex: SingleSelectableRows.selectedRowIndex(this.props.children, this.props.isSelectable)}
	}

	render() {
		const {children, height, onClick, isSelectable, ...customProps} = this.props;
		const clonedChilItems = this.clonedChildItems(children);
		
		return(
			<TableRows height = {height} children = {clonedChilItems} {...customProps}/>
		);
	}

};

SingleSelectableRows.propTypes = propTypes;
SingleSelectableRows.defaultProps = defaultProps;

export default SingleSelectableRows;