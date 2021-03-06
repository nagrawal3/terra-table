import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableHeader from './TableHeader';
import TableHeaderContent from './TableHeaderContent';
import TableRows from './TableRows';
import TableRow from './TableRow';
import TableRowContent from './TableRowContent';
import TableSingleSelectableRows from './SingleSelectableRows';
import './table.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  isStriped: PropTypes.bool,
};

const defaultProps = {
  isStriped: true,
};

const Table = ({
  children,
  isStriped,
  ...customProps
  }) => {
  const tableClassNames = classNames([
    'terra-Table',
    { 'terra-Table--striped': isStriped },
    customProps.className,
  ]);
  return (
    <table {...customProps} className={tableClassNames}>
      {children}
    </table>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.Rows = TableRows;
Table.Header = TableHeader;
Table.HeaderContent = TableHeaderContent;
Table.Row = TableRow;
Table.RowContent = TableRowContent;
Table.SingleSelectableRows = TableSingleSelectableRows;

export default Table;
