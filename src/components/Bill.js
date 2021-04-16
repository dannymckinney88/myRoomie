import React, { useState, useEffect } from "react"
import BillItems from "./BillItems"

export default function Bill(props) {
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
            <React.Fragment key={index}>
              <BillItems
                key={index}
                name={person.name}
                paid={person.paid}
                amount={props.bill.totalAmount}
              />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
