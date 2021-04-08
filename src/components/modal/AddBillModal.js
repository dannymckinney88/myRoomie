import React, { useState, useRef, useEffect } from "react"
import Modal from "./Modal"
import { useFirestore } from "../../contexts/FirestoreContext"

export default function AddBillModal() {
  const modal = useRef(null)
  const [billName, setBillName] = useState("")
  const [billAmount, setBillAmount] = useState()
  const [checkBoxOptions, setCheckBoxOptions] = useState([])


  const { room, addBill } = useFirestore()

  const handleBillName = (e) => {
    setBillName(e.target.value)
  }

  const handleBillAmount = (e) => {
    setBillAmount(e.target.value)
  }
  const handleBill = async (e) => {
    e.preventDefault()
    addBill(billName, billAmount, checkBoxOptions)
    console.log(billName)
    console.log(billAmount, checkBoxOptions)
  }


  const clearSelectio = () => [setCheckBoxOptions({})]

  const createSelection = () => {
    clearSelectio()
    setCheckBoxOptions(
      room.userNames.map((name, index) => {
        console.log(name)
        return {
          paid: true,
          id: index,
          name: name,
        }
      })
    )
  }

  useEffect(() => {
    console.log(room, "room")
    createSelection()
  }, [room])

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
              className="text-small font-bold text-gray-600 block py-1 pt-1"
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
              className="text-small font-bold text-gray-600 block py-1 pt-4"
            >
              Amount $
            </label>
            <input
              onChange={handleBillAmount}
              value={billAmount}
              className="w-full p-2 border border-gray-300 rounded mt-1 "
              type="text"
              id="amount"
              name="amount"
            />
          </div>

          <div className="flex flex-row">
            {checkBoxOptions.length > 1
              ? checkBoxOptions.map((option, index) => (
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
                            if (option.id === data.id && data.paid === false) {
                              data.paid = true
                            } else if (
                              option.id === data.id &&
                              data.paid === true
                            ) {
                              data.paid = false
                            }
                            return data
                          })
                        )
                      }}
                      user={option.name}
                      type="checkbox"
                    />
                  </div>
                ))
              : ""}
          </div>
          <button type="submit" className="py-1 pt-4" onClick={handleBill}>
            Add Room
          </button>
        </form>
      </Modal>
    </div>
  )
}
