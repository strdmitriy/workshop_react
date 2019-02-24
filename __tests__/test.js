import 'react-log-state';
import { mount } from 'enzyme';
import React from 'react';
import App from '../src/App';

ReactLogState.logAll(); // eslint-disable-line
const dataTab = 'li[data-test="tab"]';
const listOfTabs = 'ul[data-test="list-tabs"]';

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

describe('Create/Remove', () => {
  it('added tab', () => {
    const content = mount(<App />);
    const addButton = content.find('[data-test="button-add"]');
    const listOfTabsBeforeCreation = content.find(listOfTabs);
    expect(listOfTabsBeforeCreation).toContainMatchingElements(3, dataTab);
    addButton.simulate('click');
    const listOfTabsAfterCreation = content.find(listOfTabs);
    expect(listOfTabsAfterCreation).toContainMatchingElements(4, dataTab);
  });

  it('remove tab', () => {
    const content = mount(<App />);
    const addButton = content.find('[data-test="button-remove"]');
    const listOfTabsBeforeCreation = content.find(listOfTabs);
    expect(listOfTabsBeforeCreation).toContainMatchingElements(3, dataTab);
    addButton.simulate('click');
    const listOfTabsAfterCreation = content.find(listOfTabs);
    expect(listOfTabsAfterCreation).toContainMatchingElements(2, dataTab);
  });
});
