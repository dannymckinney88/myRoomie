import React from "react"

export default function Chore(props) {
  console.log(props.chores)
  return (
    <tr>
      <td className=" px-8 py-4">Danny</td>
      <td className=" px-8 py-4">Dishes</td>
      <td>No completed</td>
    </tr>
  )
}
