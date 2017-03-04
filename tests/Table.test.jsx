import React from 'react';
import initStoryshots from 'storyshots';
import Table from '../src/Table';

const defaultVariety =
(<Table>
  <Table.Header>
    <Table.HeaderContent display={'Column Heading 1 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} minWidth={'huge'} />
    <Table.HeaderContent display={'Column Heading 2'} key={2} minWidth={'medium'} />
    <Table.HeaderContent display={'Column Heading 3 Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} minWidth={'large'} />
  </Table.Header>
  <Table.SingleSelectableRows>
    <Table.Row isSelected isSelectable={false} key={0}>
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
    </Table.Row>
    <Table.Row isSelected key={1}>
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
    </Table.Row>
    <Table.Row isSelected={false} key={2}>
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={1} />
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={2} />
      <Table.RowContent display={'Vey long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text Very long button text'} key={3} />
    </Table.Row>
  </Table.SingleSelectableRows>
</Table>);

// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should have the class terra-Table--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-Table');
});
