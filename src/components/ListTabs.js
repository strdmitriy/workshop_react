import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListTabs = () => (
  <Tabs>
    <TabList>
      <Tab data-test="tab-1">Title 1</Tab>
      <Tab data-test="tab-2">Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
);

export default ListTabs;
