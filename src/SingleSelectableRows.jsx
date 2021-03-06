import React, { PropTypes } from 'react';
import TableRows from './TableRows';

const propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

class SingleSelectableRows extends React.Component {
  static selectedRowIndex(rows) {
    // Find the first row which is selected and is selectable
    return rows.findIndex(row => row.props.isSelected && row.props.isSelectable !== false);
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.shouldHandleSelection = this.shouldHandleSelection.bind(this);
    this.state = { selectedIndex: SingleSelectableRows.selectedRowIndex(this.props.children) };
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
      if (row.props.isSelectable !== false && this.shouldHandleSelection(index)) {
        this.handleSelection(event, index);
      }

      if (initialOnClick) {
        initialOnClick(event);
      }
    };
  }

  newPropsForRow(row, index, onClick) {
    const isSelected = this.state.selectedIndex === index;

    const newProps = { onClick };

    // set the isSelected attribute to false for all the rows except the row whose index is set to state selectedIndex
    // This will ensure that only one row will be selected at a moment of time.
    if (isSelected !== row.props.isSelected) {
      newProps.isSelected = isSelected;
    }

    const isSelectable = row.props.isSelectable;
    // By default isSelectable attribute for the TableRow is undefined, as this is selectable table,
    // we will make row selectable by default. If consumer specify the row attribute isSelectable as false,
    // then row will not be selectable
    if (isSelectable === undefined) {
      newProps.isSelectable = true;
    }

    return newProps;
  }

  clonedChildItems(rows) {
    return rows.map((row, index) => {
      const wrappedOnClick = this.wrappedOnClickForRow(row, index);
      const newProps = this.newPropsForRow(row, index, wrappedOnClick);
      return React.cloneElement(row, newProps);
    });
  }

  render() {
    const { children, height, ...customProps } = this.props;
    const clonedChilItems = this.clonedChildItems(children);
    if ('onClick' in customProps) {
      delete customProps.onClick;
    }
    return (
      <TableRows height={height} {...customProps}>
        {clonedChilItems}
      </TableRows>
    );
  }

}

SingleSelectableRows.propTypes = propTypes;
SingleSelectableRows.defaultProps = defaultProps;

export default SingleSelectableRows;
