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
  //   const bill = bills.map((billInfo) => console.log(billInfo));
  let log = function (msg) {
    console.log(msg)
  }

  useEffect(() => {
    bills.map(log)
  }, [])

  const bill = bills.map((billInfo) => (
    <>
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
          {billInfo.paidBy.map((person) => (
            <>
              <BillItems
                name={person.name}
                paid={person.paid}
                amount={billInfo.amount / billInfo.paidBy.length}
              />
            </>
          ))}
        </tbody>
      </table>
      {/* <table class="table-auto shadow-lg bg-white">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-8 py-4">Intro to CSS</td>
              <td className="border px-8 py-4">Adam</td>
              <td className="border px-8 py-4">858</td>
            </tr>
            <tr class="bg-emerald-200">
              <td>
                A Long and Winding Tour of the History of UI Frameworks and
                Tools and the Impact on Design
              </td>
              <td>Adam</td>
              <td>112</td>
            </tr>
            <tr>
              <td>Intro to JavaScript</td>
              <td>Chris</td>
              <td>1,280</td>
            </tr>
          </tbody>
        </table> */}
    </>
  ))

  return <div>{bill}</div>
}
