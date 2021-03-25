import React, { useState, useEffect } from "react";
import BillContainer from "./BillContainer";
export default function Bill() {
  const [bills] = useState([
    {
      name: "rent",
      paidBy: ["Joey", "Antonio", "Tony"],
      amount: 1300,
    },
  ]);
  //   const bill = bills.map((billInfo) => console.log(billInfo));
  let log = function (msg) {
    console.log(msg);
  };

  useEffect(() => {
    bills.map(log);
  }, []);

  const bill = bills.map((billInfo) => (
    <>
      <div>
        <h4>{billInfo.name}</h4>
      </div>
      <div>
        {billInfo.paidBy.map((name) => (
          <>
            <BillContainer
              name={name}
              amount={billInfo.amount / billInfo.paidBy.length}
            />
          </>
        ))}
      </div>
    </>
  ));

  return <div>{bill}</div>;
}
