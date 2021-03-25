import React from "react";
import { Tabs } from "@feuer/react-tabs";
import TabContent from "./TabContent";

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
        <TabContent />
      </Tabs>
    </div>
  );
}
