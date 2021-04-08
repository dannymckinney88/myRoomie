import React from "react"
import Chore from "./Chore"

export default function ChoresList(props) {
  return (
    <table class="table-auto shadow-lg bg-white ">
      <thead>
        <tr>
          <th>Roomie</th>
          <th>task</th>
          <th>complete</th>
        </tr>
      </thead>
      <tbody>
        <Chore chores={props.chores} />
      </tbody>
    </table>
  )
}
