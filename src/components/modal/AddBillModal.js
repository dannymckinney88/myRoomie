import React, { useState, useRef, useEffect } from "react"
import Modal from "./Modal"
import { useFirestore } from "../../contexts/FirestoreContext"
import { db } from "../../firebase"

export default function AddBillModal(props) {
  const modal = useRef(null)
  const [billName, setBillName] = useState("")
  const [billAmount, setBillAmount] = useState()
  const [checkBoxOptions, setCheckBoxOptions] = useState([])
  const [redirect, setRedirect] = useState(false)

  const { room } = useFirestore()

  const handleBillName = (e) => {
    setBillName(e.target.value)
  }

  const handleBillAmount = (e) => {
    setBillAmount(e.target.value)
  }
  const handleBill = async (e) => {
    e.preventDefault()
    const users = []
    checkBoxOptions.forEach((user) => {
      console.log(user)
      if (user.paid === true) {
        users.push(user)
      }
    })
    await db
      .collection("rooms")
      .doc(props.roomId)
      .collection("Bills")
      .add({
        billName: billName,
        totalAmount: billAmount,
        users: users,
      })
      .then((doc) => {
        console.log(doc.data)
      })
    setRedirect(true)
    console.log(redirect)
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
    <>
      <div>
        <div>
          <button
            className="bg-white text-black rounded-full py-3 px-6 mt-6 "
            onClick={() => modal.current.open()}
          >
            {" "}
            Open me
          </button>
        </div>
        <Modal ref={modal}>
          <form onSubmit={handleBill}>
            <div>
              <label
                htmlFor="bill"
                className="text-small font-bold text-white block my-1"
              >
                Bill
              </label>
              <input
                onChange={handleBillName}
                value={billName}
                className="w-full p-2 border border-gray-300 rounded mb-3"
                type="text"
                id="bill"
                name="bill"
                required
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="text-small font-bold text-white block my-1"
              >
                Amount $
              </label>
              <input
                onChange={handleBillAmount}
                value={billAmount}
                className="w-full p-2 border border-gray-300 rounded mt-1 mb-3"
                type="text"
                id="amount"
                name="amount"
                required
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
                        required
                        onChange={(event) => {
                          let checked = event.target.checked
                          setCheckBoxOptions(
                            checkBoxOptions.map((data) => {
                              if (
                                option.id === data.id &&
                                data.paid === false
                              ) {
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
            <button
              type="submit"
              className="bg-white text-black rounded-full py-3 px-6 mt-6 "
              onClick={(e) => {
                handleBill(e)
                modal.current.close()
              }}
            >
              Add Room
            </button>
          </form>
        </Modal>
      </div>
    </>
  )
}
