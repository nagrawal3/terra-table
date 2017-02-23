import React from 'react';
import initStoryshots from 'storyshots';
import Table from '../src/Table';

const defaultVariety = <Table />;
const primaryVariety = <Table name="primary" variant="terra-Table--primary" />;

// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

it('should render a primary component', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
});


// Prop Tests
it('should have the class terra-Table--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-Table terra-Table--default');
});

it('should have the class terra-Table--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-Table terra-Table--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Table--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Table--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Table--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Table--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
