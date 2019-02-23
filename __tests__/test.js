import 'react-log-state';
import React from 'react';
import App from '../src/App';

ReactLogState.logAll(); // eslint-disable-line

describe('Tabs', () => {
  const dataTest = 'li[data-test^="tab"]';
  it('renders correctly', () => {
    const content = mount(<App />);
    expect(content).toMatchSnapshot();
  });

  it('active tab-1', () => {
    const content = mount(<App />);
    const tab = content.find(dataTest).at(0);
    tab.simulate('click');
    expect(content.render()).toMatchSnapshot();
  });

  it('added tab', () => {
    const content = mount(<App />);
    const tab = content.find('button[data-test="button-add"]');
    tab.simulate('click');
    console.log(content);
    expect(content.render()).toMatchSnapshot();
  });
});
