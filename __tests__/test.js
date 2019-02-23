import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from '../src/components/App';

it('renders correctly', () => {
  const content = mount(<Tabs />);
  expect(content).toMatchSnapshot();
});

it('active tab', () => {
  const content = mount(<Tabs />);
  const tab = content.find('#react-tabs-2');
  console.log(tab);
  expect(content).toMatchSnapshot();
});
