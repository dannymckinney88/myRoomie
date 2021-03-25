import React from "react";
import { Tabs } from "@feuer/react-tabs";

export default function TabContent(props) {
  return (
    <>
      <Tabs.Tab id="tab1" title="Tab 1">
        <div style={{ padding: 10 }} className="container">
          <div>
            <h1>High</h1>
          </div>
        </div>
      </Tabs.Tab>
    </>
  );
}
