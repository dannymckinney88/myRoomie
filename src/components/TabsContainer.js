import React, { useState } from "react";
import { Tabs } from "@feuer/react-tabs";
import Bills from "./Bills";
import Chores from "./Chores";
import Dashboard from "./Dashboard";

export default function Tab(props) {
  const [list] = useState(["Bills", "Chores"]);
  const [bills, setBills] = useState(["bills"]);
  const [chores, setChores] = useState(["chores"]);
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  console.log(props);

  // const tabs = list.map((tab) => <TabContent name={tab} />);
  return (
    <div style={styles}>
      <Tabs
        activeTab={{
          id: list[0],
        }}
      >
        <Tabs.Tab id="Dashboard" title="Dashboard">
          <div className="container pt-4">
            <div>
              <Dashboard />
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id={chores[0]} title={chores[0]}>
          <div className="container pt-4">
            <div>
              {chores.length > 0 ? <Chores /> : "No Bills"}
              {/* <h1>{bills[0]}</h1> */}
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id={bills[0]} title={bills[0]}>
          <div className="container pt-4">
            <div>
              {bills.length > 0 ? <Bills /> : "No Bills"}
              {/* <h1>{bills[0]}</h1> */}
            </div>
          </div>
        </Tabs.Tab>
        {/* {tabs} */}
      </Tabs>
    </div>
  );
}
