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
    const listOfTabs = content.find('[data-test="list-tabs"]');
    expect(listOfTabs.children().length - 1).toBe(4);
  });

  it('remove tab', () => {
    const content = mount(<App />);
    const removeButton = content.find('[data-test="button-remove"]');
    removeButton.simulate('click');
    const listOfTabs = content.find('[data-test="list-tabs"]');
    expect(listOfTabs.children().length - 1).toBe(2);
  });
});
