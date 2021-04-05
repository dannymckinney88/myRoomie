import React, { useState, useRef } from "react"
import Modal from "./Modal"
import UserInput from "../UserInput"
import CheckBoxs from "./CheckBoxs"
import { useFirestore } from "../../contexts/FirestoreContext"

export default function AddBillModal() {
  const modal = useRef(null)
  const [users, setUsers] = useState([])
  const [bill, setBill] = useState("")
  const [counter, setCounter] = useState([1])
  const [usersPaying, setUsersPaying] = useState([])
  const [checkBoxOptions, setCheckBoxOptions] = useState([])

  const { room } = useFirestore()
  console.log(room, room.userNames[0])

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
    // console.log(userSelect)
    createSelection()
    console.log(checkBoxOptions)
  }

  const createSelection = () => {
    setCheckBoxOptions(
      room.userNames.map((name, index) => {
        console.log(name)
        return {
          select: false,
          id: index,
          name: name,
        }
      })
    )
  }

  const checkBoxs = checkBoxOptions.map((option, index) => (
    <div key={index}>
      <label htmlFor="name">{option.name}</label>
    </div>
  ))

  // const userSelect = room.userNames.map((name, index) => {
  //   setCheckBoxOptions((oldArray) => [
  //     ...oldArray,
  //     {
  //       name: oldArray.name,
  //       id: index,
  //       checked: false,
  //     },
  //   ])
  //   return (
  //     <UserInput key={index} handleUser={handleUser} user={room.userNames} />
  //   )
  // })

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
          <CheckBoxs checkBoxOptions={checkBoxOptions} />
          <UserInput handleUser={handleUser} user={room.userNames} />
          <button type="submit">Add Room</button>
        </form>
        <button value={1} onClick={handleUser}>
          Add user
        </button>
      </Modal>
    </div>
  )
}
