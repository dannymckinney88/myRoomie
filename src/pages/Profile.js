import React, { useState, useEffect, useRef } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { useAuth } from "../contexts/AuthContext"
import RoomButtons from "../components/RoomButtons"
import CreateRoomModal from "../components/modal/CreateRoomModal"
import ProfileNav from "../components/nav/ProfileNav"

export default function Profile(props) {
  const { rooms, roomsId, fetchRooms, fetchBills, bills } = useFirestore()
  const [error, setError] = useState("")

  const [currentRooms] = useState(rooms)
  // const [roomsId, setRoomsId] = useState([])

  // Auth & DB
  const { currentUser, logout } = useAuth()

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
  const getRooms = async () => {
    await fetchRooms(currentUser.uid)
  }

  useEffect(() => {
    getRooms()
  }, [])

  return (
    <div className=" font-serif bg-green-300 h-screen">
      <ProfileNav />
      <div>
        <h1>Profile</h1>
      </div>
      <div>
        {rooms[0] ? <RoomButtons rooms={rooms} roomIds={roomsId} /> : "HELLO"}
        <CreateRoomModal />
      </div>
    </div>
  )
}
