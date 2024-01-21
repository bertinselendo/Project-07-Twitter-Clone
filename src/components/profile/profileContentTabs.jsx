import React from "react";
import TweetsList from "../tweetsList";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function ProfileContentTabs() {
  const notContentClasses = "h-[40vh] flex justify-center items-center";
  return (
    <>
      <Tabs>
        <TabList className="flex justify-between border-b border-gray-text *:p-4 *:cursor-pointer *:text-sm *:font-bold *:text-text-gray hover:*:bg-gray *:transition-colors focus-visible:*:outline-0">
          <Tab>Posts</Tab>
          <Tab>Reponses</Tab>
          <Tab>Tweets marquants</Tab>
          <Tab>Medias</Tab>
          <Tab>J'aimes</Tab>
        </TabList>
        <TabPanel>
          <h2>Post de ...</h2>
        </TabPanel>
        <TabPanel>
          <div className={notContentClasses}>Under Construction</div>
        </TabPanel>
        <TabPanel>
          <div className={notContentClasses}>Under Construction</div>
        </TabPanel>
        <TabPanel>
          <div className={notContentClasses}>Under Construction</div>
        </TabPanel>
        <TabPanel>
          <div className={notContentClasses}>Under Construction</div>
        </TabPanel>
      </Tabs>
    </>
  );
}
