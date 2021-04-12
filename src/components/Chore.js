import React from "react"

export default function Chore(props) {
  console.log(props.chores)

  return (
    <>
      {props.chores.length >= 1 &&
        props.chores.map((item) => (
          <>
            <tr>
              <td className=" px-8 py-4">{item.user.userName}</td>
              <td className=" px-8 py-4">{item.task}</td>
              <td>No completed</td>
            </tr>
          </>
        ))}
    </>
  )
}
