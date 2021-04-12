import React from "react"
import Chore from "./Chore"

export default function ChoresList(props) {
  return (
    <>
      {props.chores.length >= 1 && (
        <>
          <h1 className="text-left pt-12">{props.chores[0].area}</h1>
          <table class="table-fixed shadow-lg bg-white w-4/6">
            <thead>
              <tr>
                <th className="w-1/4">Roomie</th>
                <th className="w-1/2">task</th>
                <th className="w-1/4">complete</th>
              </tr>
            </thead>
            <tbody>
              <Chore chores={props.chores} />
            </tbody>
          </table>
        </>
      )}
    </>
  )
}
