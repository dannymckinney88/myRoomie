import React, { useState, useEffect } from "react"
import Bill from "./Bill"
import AddBillModal from "./modal/AddBillModal"
import { useFirestore } from "../contexts/FirestoreContext"
import { db } from "../firebase"

export default function Bills(props) {
  const [bills, setBills] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .collection("rooms")
      .doc(props.roomId)
      .collection("Bills")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data())
        setBills(data)
      })

    return () => unsubscribe()
  }, [])

  const allBills = bills.map((bill, index) => <Bill key={index} bill={bill} />)
  console.log(props.bills)
  return (
    <div className="container" class="container">
      <div>
        <AddBillModal
          roomId={props.roomId}
          setBills={setBills}
          roomName={props.roomName}
        />
      </div>
      {allBills.length >= 1 && allBills}
    </div>
  )
}
