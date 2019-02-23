import React from 'react';
import App from '../src/App';

describe('Tabs', () => {
  const dataTest = 'li[data-test^="tab"]';
  it('renders correctly', () => {
    const content = mount(<App />);
    expect(content).toMatchSnapshot();
  });

  it('active tab-1', () => {
    const content = mount(<App />);
    const tab = content.find(dataTest).at(0);
    console.log(tab);
    tab.simulate('click');
    expect(content.render()).toMatchSnapshot();
  });

  it('active tab-2', () => {
    const content = mount(<App />);
    const tab = content.find(dataTest).at(1);
    tab.simulate('click');
    expect(content.render()).toMatchSnapshot();
  });
});
