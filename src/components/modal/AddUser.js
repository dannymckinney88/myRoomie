import React, { useState, useRef, useEffect } from "react"
import Modal from "./Modal"
import { db } from "../../firebase"

export default function AddUser(props) {
  // Modal
  const modal = useRef(null)

  //   state
  const [roomId] = useState(props.roomId)
  const [roomName] = useState(props.roomName)
  const [email, setEmail] = useState("")

  const handleUser = async (e) => {
    e.preventDefault()

    console.log(roomId)
    await db
      .collection("request")
      .doc()
      .set({
        userEmail: email,
        roomId: roomId,
        roomName: roomName,
      })
      .then(() => {})
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div>
      <button
        type="button"
        className="bg-black text-white rounded-full py-3 px-6 mt-6 "
        onClick={(e) => {
          modal.current.open()
        }}
      >
        Add A Roomie
      </button>
      <Modal ref={modal}>
        <form onSubmit={handleUser}>
          <div>
            <label
              htmlFor="user"
              className="text-small font-bold text-white block my-1"
            >
              Enter the users email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mb-3"
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black rounded-full py-3 px-6 mt-6 "
            onClick={() => {
              //   modal.current.close()
            }}
          >
            Add Room
          </button>
        </form>
      </Modal>
    </div>
  )
}
