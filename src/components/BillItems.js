import React from "react"

export default function BillItems(props) {
  return (
    <tr>
      <td className="border px-8 py-4">{props.name}</td>
      <td className="border px-8 py-4">
        {Math.round(props.amount * 100) / 100}
      </td>
      <td>{!props.paid ? "Paid" : "Unpaid"}</td>
    </tr>
  )
}
