import React from "react"
import Bill from "./Bill"
import AddBillModal from "./modal/AddBillModal"

export default function Bills(props) {
  return (
    <div className="container" class="container">
      <div>
        <AddBillModal />
      </div>
      <Bill />
    </div>
  )
}
