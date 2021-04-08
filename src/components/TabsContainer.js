import React, { useState } from "react"
import { Tabs } from "@feuer/react-tabs"
import Bills from "./Bills"
import Chores from "./Chores"
import Dashboard from "./Dashboard"

export default function Tab(props) {
  console.log(props.bills)
  return (
    <div>
      <Tabs
        activeTab={{
          id: "Dashboard",
        }}
      >
        <Tabs.Tab id="Dashboard" title="Dashboard">
          <Dashboard />
        </Tabs.Tab>
        <Tabs.Tab id="choes" title="chores">
          <Chores />
        </Tabs.Tab>
        <Tabs.Tab id="bills" title="bills">
          <Bills bills={props.bills} />
        </Tabs.Tab>
      </Tabs>
    </div>
  )
}
