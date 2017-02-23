import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableHeader from '../src/TableHeader';
import TableHeaderContent from '../src/TableHeaderContent';
import TableRows from '../src/TableRows';
import TableRow from '../src/TableRow';
import TableRowContent from '../src/TableRowContent';
import TableSingleSelectableRows from '../src/SingleSelectableRows';
import '../src/table.scss';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isStripped: PropTypes.bool
};

const defaultProps = {
  isStripped: true
};

const Table = ({
  children,
  isStripped,
  ...customProps
  }) => {
  let tableClassNames = classNames([
      'terra-Table',
      {'terra-Table--striped': isStripped},
      customProps.className
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
