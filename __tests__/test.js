import 'react-log-state';
import { mount } from 'enzyme';
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
});

describe('Create', () => {
  it('added tab', () => {
    const content = mount(<App />);
    const addButton = content.find('[data-test="button-add"]');
    addButton.simulate('click');
    expect(content).toContainMatchingElement('li[data-test="tab-1"]');
  });

  it('remove tab', () => {
    const content = mount(<App />);
    const addButton = content.find('[data-test="button-remove"]');
    addButton.simulate('click');
    expect(content.containsMatchingElement('li[data-test="tab-1"]')).toBe(false);
  });
});
