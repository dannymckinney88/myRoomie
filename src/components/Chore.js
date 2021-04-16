import React, { useState } from "react"

export default function Chore(props) {
  const [complete, setComplete] = useState()
  console.log(props.chore)

  const handleCheck = (e) => {
    console.log(e.target.checked, e.target.name)
  }

  return (
    <>
      <tr>
        <td className=" px-8 py-4 line-through">
          {props.chore.data.user.userName}
        </td>
        <td className=" px-8 py-4">{props.chore.data.task}</td>
        <td>No completed</td>

        <td>
          {" "}
          <input
            onChange={handleCheck}
            type="checkbox"
            name={props.chore.id}
          />{" "}
        </td>
      </tr>
    </>
  )
}
