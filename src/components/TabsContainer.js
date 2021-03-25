import React, { useState } from "react";
import { Tabs } from "@feuer/react-tabs";
import TabContent from "./TabContent";

export default function Tab(props) {
  const [list] = useState(["Bills", "Chores"]);
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  console.log(props);

  const tabs = list.map((tab) => <TabContent name={tab} />);
  return (
    <div style={styles}>
      <Tabs
        activeTab={{
          id: list[0],
        }}
      >
        {tabs}
      </Tabs>
    </div>
  );
}
