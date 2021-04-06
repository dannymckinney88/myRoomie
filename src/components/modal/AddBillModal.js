import React, { useState, useRef, useEffect } from "react"
import Modal from "./Modal"
import UserInput from "../UserInput"
import CheckBoxs from "./CheckBoxs"
import { useFirestore } from "../../contexts/FirestoreContext"

export default function AddBillModal() {
  const modal = useRef(null)
  const [users, setUsers] = useState([])
  const [billName, setBillName] = useState("")
  const [billAmount, setBillAmount] = useState()
  const [counter, setCounter] = useState([1])
  const [usersPaying, setUsersPaying] = useState([])
  const [checkBoxOptions, setCheckBoxOptions] = useState([])

  const { room } = useFirestore()

  const handleBillName = (e) => {
    setBillName(e.target.value)
  }

  const handleBillAmount = (e) => {
    setBillAmount(e.target.value)
  }
  const handleBill = async (e) => {
    e.preventDefault()
    console.log(billName)
    console.log(billAmount, checkBoxOptions)
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

  useEffect(() => {
    createSelection()
  }, [])

  return (
    <div>
      <div>
        <button onClick={() => modal.current.open()}> Open me</button>
      </div>
      <Modal ref={modal}>
        <form onSubmit={handleBill}>
          <div>
            <label
              htmlFor="bill"
              className="text-small font-bold text-gray-600 block"
            >
              Bill
            </label>
            <input
              onChange={handleBillName}
              value={billName}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
              id="bill"
              name="bill"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="text-small font-bold text-gray-600 block"
            >
              Amount $
            </label>
            <input
              onChange={handleBillAmount}
              value={billAmount}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
              id="amount"
              name="amount"
            />
          </div>

          <div className="flex flex-row">
            {checkBoxOptions.map((option, index) => (
              <div
                className="flex flex-col justify-items-center justify-centers items-center p-4"
                key={index}
              >
                <label htmlFor="name">{option.name}</label>
                <input
                  onChange={(event) => {
                    let checked = event.target.checked
                    setCheckBoxOptions(
                      checkBoxOptions.map((data) => {
                        if (option.id === data.id && data.select === false) {
                          data.select = true
                        } else if (
                          option.id === data.id &&
                          data.select === true
                        ) {
                          data.select = false
                        }
                        return data
                      })
                    )
                  }}
                  user={option.name}
                  type="checkbox"
                />
              </div>
            ))}
          </div>
          <button type="submit" onClick={handleBill}>
            Add Room
          </button>
        </form>
      </Modal>
    </div>
  )
}
