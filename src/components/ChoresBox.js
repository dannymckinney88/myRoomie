import React from "react"
import ChoresList from "./ChoresList"
export default function ChoresBox(props) {
  return (
    <>
      {props.chores.length >= 1 && (
        <div className="col flex items-center justify-center ">
          <div className="flex flex-col">
            <ChoresList chores={props.chores} />
          </div>
        </div>
      )}
    </>
  )
}
