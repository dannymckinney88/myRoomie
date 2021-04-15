import React from "react"
import Chores from "./Chores"

export default function ChoresList(props) {
  return (
    <>
      {props.chores.length >= 1 && (
        <>
          <h1 className="text-left pt-12">{props.chores[0].data.area}</h1>
          <table className="table-fixed shadow-lg bg-white w-4/6">
            <thead>
              <tr>
                <th className="w-1/6">Roomie</th>
                <th className="w-1/2">task</th>
                <th className="w-1/4">complete</th>
                <th className="w-1/8">&#10004;</th>
              </tr>
            </thead>
            <tbody>
              <Chores chores={props.chores} />
            </tbody>
          </table>
        </>
      )}
    </>
  )
}
