import React from "react";
import { Tabs } from "@feuer/react-tabs";

export default function Tab(props) {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  console.log(props);
  return (
    <div style={styles}>
      <Tabs
        activeTab={{
          id: "tab1",
        }}
      >
        <Tabs.Tab id="tab1" title="Tab 1">
          <div style={{ padding: 10 }}>This is tab 1</div>
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Tab 2">
          <div style={{ padding: 10 }}>This is tab 2</div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
