import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabsList = [
  {
    name: 'Title 1',
    content: 'Content 1',
    id: 0,
  },
];

class ListTabs extends React.Component {
  state = {
    tabs: tabsList,
    count: 1,
  }

  handlerAddTabs = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ tabs: [...this.state.tabs, { name: `Title ${this.state.count}`, content: `Content ${this.state.count}`, id: this.state.count }] });
    console.log(this.state.tabs);
  }

  handlerDeletedTabs = () => {
    const lastElement = this.state.tabs.length - 1;
    this.setState({ count: this.state.count - 1 });
    this.setState({ tabs: this.state.tabs.filter(item => item.id !== lastElement) });
  }

  render() {
    return (
      <React.Fragment>
        <Tabs>
          <TabList>
            {
              this.state.tabs.map((tab, index) => (
                <Tab key={index} data-test={`tab-${index}`}>{`Title ${index}`}</Tab>
              ))
            }
          </TabList>
          {
            this.state.tabs.map((tab, index) => (
              <TabPanel key={index}>
                <h2>{`Any content ${index}`}</h2>
              </TabPanel>
            ))
          }
        </Tabs>
        <button data-test="button-add" onClick={this.handlerAddTabs}>Добавить таб</button>
        <button data-test="button-remove" onClick={this.handlerDeletedTabs}>Удалить таб</button>
      </React.Fragment>
    );
  }
}

export default ListTabs;
