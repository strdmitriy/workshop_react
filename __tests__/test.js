import React from 'react';
import Tabs from '../src/components/App';

it('renders correctly', () => {
  const content = mount(<Tabs />);
  expect(content).toMatchSnapshot();
});

it('active tab-1', () => {
  const content = mount(<Tabs />);
  const tab = content.find('li[data="tab-1"]');
  tab.simulate('click');
  expect(content.render()).toMatchSnapshot();
});

it('active tab-2', () => {
  const content = mount(<Tabs />);
  const tab = content.find('li[data="tab-2"]');
  tab.simulate('click');
  expect(content.render()).toMatchSnapshot();
});
