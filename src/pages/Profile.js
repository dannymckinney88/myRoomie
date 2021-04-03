import React, { useState, useEffect, useRef } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import RoomButtons from "../components/RoomButtons"
import CreateRoomModal from "../components/modal/CreateRoomModal"

export default function Profile(props) {
  const [error, setError] = useState("")
  const [rooms, setRooms] = useState([])
  const [roomsId, setRoomsId] = useState([])
  // Auth & DB
  const { currentUser, logout } = useAuth()
  const { addRoom, addUserSub, getRooms } = useFirestore()

  // Auth
  async function handleLogout() {
    setError("")

    try {
      await logout()
      props.history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  // Firesotre Calls
  const fetchRooms = async () => {
    console.log(currentUser.uid)
    await db
      .collection("rooms")
      .where("users", "array-contains", currentUser.uid)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setRooms((oldArray) => [...oldArray, doc.data()])
          setRoomsId((oldArray) => [...oldArray, doc.id])
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(async () => {
    await fetchRooms()
  }, [])

  return (
    <div>
      <h1>Profile</h1>
      <div>
        {rooms[0] ? <RoomButtons rooms={rooms} roomIds={roomsId} /> : "loading"}
      </div>
      <CreateRoomModal />
      <button className="bg-black text-white" onClick={handleLogout}>
        Sign Out
      </button>
      {/* <button onClick={handleAddRoom}>Add Room</button> */}
    </div>
  )
}
