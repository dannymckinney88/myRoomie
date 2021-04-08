import React, { useRef, useState } from "react"
import { Redirect } from "react-router"
import Modal from "./Modal"

import { useFirestore } from "../../contexts/FirestoreContext"
import { useAuth } from "../../contexts/AuthContext"
import { db } from "../../firebase"

export default function CreateRoomModal(props) {
  const [roomId, setRoomId] = useState([])
  const [roomName, setRoomName] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [userName, setUserName] = useState("")
  // Auth & DB
  const { currentUser, logout } = useAuth()
  const { addRoom, addUserSub, getRooms } = useFirestore()
  // Modal ref
  const modal = useRef(null)

  // Firestore
  async function handleAddRoom(e) {
    e.preventDefault()
    await addRoom(roomName, currentUser.uid, userName)
      .then((docRef) => {
        console.log("Created room ID", docRef.id)
        setRoomId(docRef.id)
        handleUserSubcollection(docRef.id)
      })
      .catch((error) => {
        console.log(error)
      })
    setRedirect(true)
  }

  const handleUserSubcollection = async (roomId) => {
    await addUserSub(currentUser.uid, "Danny", roomId)
      .then((docRef) => {
        console.log(docRef.id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Event listeners
  const handleRoomName = (e) => {
    setRoomName(e.target.value)
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }
  return (
    <>
      {redirect ? (
        <Redirect to={`/room/${roomId}/${roomName}`} />
      ) : (
        <div>
          <div>
            <button onClick={() => modal.current.open()}> Open me</button>
          </div>
          <Modal ref={modal}>
            <form onSubmit={handleAddRoom}>
              <div>
                <label
                  htmlFor=""
                  className="text-small font-bold text-gray-600 block"
                >
                  Room Name
                </label>
                <input
                  onChange={handleRoomName}
                  value={roomName}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  type="text"
                  id="room-name"
                  name="room-name"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-small font-bold text-gray-600 block"
                >
                  Your name
                </label>
                <input
                  onChange={handleUserName}
                  value={userName}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  type="text"
                  id="room-name"
                  name="room-name"
                />
              </div>
              <button type="submit">Add Room</button>
            </form>
          </Modal>
        </div>
      )}
    </>
  )
}
