import React, { useState, useEffect } from "react"
import BillItems from "./BillItems"

export default function Bill(props) {
  const [bills] = useState([
    {
      name: "rent",
      paidBy: [
        { name: "Joey", paid: true },
        { name: "Antonio", paid: false },
        { name: "Tony", paid: false },
      ],
      amount: 1300,
    },
  ])
  console.log(props.bill.totalAmount)

  return (
    <div>
      <div>
        <h2 className="text-left text-2xl font-bold uppercase">
          {props.bill.billName}
        </h2>
      </div>
      <table class="table-auto shadow-lg bg-white">
        <thead>
          <tr>
            <th>Roomie</th>
            <th>Amount</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {props.bill.users.map((person, index) => (
            <>
              <BillItems
                key={index}
                name={person.name}
                paid={person.paid}
                amount={props.bill.totalAmount}
              />
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
