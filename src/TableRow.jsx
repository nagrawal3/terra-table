import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableRowContent from '../src/TableRowContent';

const propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: PropTypes.func,
  isSelectable: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  isSelected: false,
  isSelectable: undefined,
  className: '',
};

function cloneChildItems(children, height) {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }
  return childrenArray.filter((child, index) => index < 16).map((child) => {
    if (child.type === TableRowContent) {
      return React.cloneElement(child, { height });
    }
    return child;
  });
}

const TableRow = ({
  className,
  children,
  isSelected,
  isSelectable,
  height,
  onClick,
  ...customProps
  }) => {
  const rowClassNames = classNames([
    { 'terra-Table--isSelected': isSelected },
    { 'terra-Table--isSelectable': isSelectable },
    className,
  ]);

  const cloneChildren = cloneChildItems(children, height);
  return (
    <tr className={rowClassNames} onClick={onClick} {...customProps}>
      {cloneChildren}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
