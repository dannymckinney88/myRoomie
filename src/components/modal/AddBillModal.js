import React, { useState, useRef } from "react"
import Modal from "./Modal"
import UserInput from "../UserInput"

export default function AddBillModal() {
  const modal = useRef(null)
  const [users, setUsers] = useState([])
  const [bill, setBill] = useState("")
  const [counter, setCounter] = useState([1])

  const handleBillChange = (e) => {
    setBill(e.target.value)
  }
  const handleBill = async (e) => {
    e.preventDefault()
    console.log(bill)
    console.log(users)
  }

  const changeCounter = (e) => {
    setCounter((oldArray) => [...oldArray, e.target.value])
    console.log(counter)
  }

  const handleUser = (name) => {
    console.log(name)
    setUsers((oldArray) => [...oldArray, name])
    console.log(users)
  }

  return (
    <div>
      <div>
        <button onClick={() => modal.current.open()}> Open me</button>
      </div>
      <Modal ref={modal}>
        <form onSubmit={handleBill}>
          <div>
            <label
              htmlFor=""
              className="text-small font-bold text-gray-600 block"
            >
              Bill
            </label>
            <input
              onChange={handleBillChange}
              value={bill}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
              id="bill"
              name="bill"
            />
          </div>
          <UserInput handleUser={handleUser} />
          <button type="submit">Add Room</button>
        </form>
        <button value={1} onClick={changeCounter}>
          Add user
        </button>
      </Modal>
    </div>
  )
}