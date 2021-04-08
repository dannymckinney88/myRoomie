import React from "react"
import ChoresList from "./ChoresList"
export default function ChoresBox(props) {
  console.log(props.chores)
  return (
    <>
      <div className="col flex items-center justify-center ">
        <div className="flex flex-col">
          <h2>{props.area}</h2>

          <ChoresList chores={props.chores} />
        </div>
      </div>
    </>
  )
}
