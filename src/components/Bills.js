import React from "react"
import Bill from "./Bill"
import AddBillModal from "./modal/AddBillModal"
import { useFirestore } from "../contexts/FirestoreContext"

export default function Bills(props) {
  const { bills } = useFirestore()

  const allBills = props.bills.map((bill, index) => (
    <Bill key={index} bill={bill} />
  ))
  console.log(props.bills)
  return (
    <div className="container" class="container">
      <div>
        <AddBillModal />
      </div>
      {allBills}
    </div>
  )
}
