import React, { useState, useRef } from "react"
import firebase from "firebase"
import Modal from "./Modal"
// import Inputs from "../inputs/Input"
import { db } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"

export default function AcceptRequest(props) {
  const modal = useRef(null)
  const { currentUser } = useAuth()

  const [userName, setUserName] = useState("")
  const handleName = (e) => {
    setUserName(e.target.value)
  }

  const deletRequest = () => {
    db.collection("request")
      .doc(props.requestId)
      .delete()
      .then(() => {
        console.log("Deleted")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(props.roomId)
    db.collection("rooms")
      .doc(props.roomId)
      .update({
        userIds: firebase.firestore.FieldValue.arrayUnion(currentUser.uid),
        userNames: firebase.firestore.FieldValue.arrayUnion(userName),
      })
      .then((res) => {
        deletRequest()
      })
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
        AcceptRequest
      </button>
      <Modal ref={modal}>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="text-small font-bold text-white block my-1"
            />
            username
            <input
              type="text"
              name="name"
              label="UserName"
              onChange={handleName}
              value={userName}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black rounded-full py-3 px-6 mt-6 "
            onClick={(e) => {
              handleSubmit(e)
              modal.current.close()
            }}
          >
            Add Room
          </button>
        </form>
      </Modal>
    </div>
  )
}
