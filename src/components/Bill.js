import React, { useState, useEffect } from "react"
import BillItems from "./BillItems"
export default function Bill() {
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

  const bill = bills.map((billInfo, index) => (
    <div key={index + 1}>
      <div>
        <h2 className="text-left text-2xl font-bold uppercase">
          {billInfo.name}
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
          {billInfo.paidBy.map((person, index) => (
            <>
              <BillItems
                key={index}
                name={person.name}
                paid={person.paid}
                amount={billInfo.amount / billInfo.paidBy.length}
              />
            </>
          ))}
        </tbody>
      </table>
    </div>
  ))

  return <div>{bill}</div>
}
