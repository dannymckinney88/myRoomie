import React, { useState } from "react"
import { Tabs } from "@feuer/react-tabs"
import Bills from "./Bills"
import ChoreContainer from "./ChoreContainer"
import Dashboard from "./Dashboard"

export default function Tab(props) {
  return (
    <div>
      <Tabs
        activeTab={{
          id: "Dashboard",
        }}
      >
        <Tabs.Tab id="Dashboard" title="Dashboard">
          <Dashboard roomId={props.roomId} roomName={props.roomName} />
        </Tabs.Tab>
        <Tabs.Tab id="choes" title="chores">
          <ChoreContainer roomId={props.roomId} />
        </Tabs.Tab>
        <Tabs.Tab id="bills" title="bills">
          <Bills
            bills={props.bills}
            roomId={props.roomId}
            roomName={props.roomName}
          />
        </Tabs.Tab>
      </Tabs>
    </div>
  )
}
