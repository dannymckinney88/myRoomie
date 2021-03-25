import React, { useState } from "react";
import { Tabs } from "@feuer/react-tabs";

export default function TabContent(props) {
  return (
    <>
      <Tabs.Tab id={props.name} title={props.name}>
        <div className="container pt-4">
          <div>
            <h1>{props.name}</h1>
          </div>
        </div>
      </Tabs.Tab>
    </>
  );
}
