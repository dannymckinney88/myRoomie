import React from "react"
import ChoresList from "./ChoresList"
export default function ChoresBox(props) {
  console.log(props.chores)
  return (
    <>
      <div className="col flex items-center justify-center border-8 border-black">
        <div className="flex flex-col">
          <h2>{props.area}</h2>

          {/* <ChoresList /> */}

          {/* <p>Danny</p>
          <p> Dishes</p> */}
          <table class="table-auto shadow-lg bg-white ">
            <thead>
              <tr>
                <th>Roomie</th>
                <th>task</th>
                <th>complete</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  )
}
