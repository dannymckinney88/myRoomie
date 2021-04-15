import React, { useState, useEffect, useRef } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { useAuth } from "../contexts/AuthContext"
import RoomButtons from "../components/RoomButtons"
import CreateRoomModal from "../components/modal/CreateRoomModal"
import ProfileNav from "../components/nav/ProfileNav"

export default function Profile(props) {
  const { rooms, roomsId, fetchRooms, fetchUser, user } = useFirestore()

  // Auth & DB
  const { currentUser } = useAuth()

  // Firesotre Calls
  const getRooms = async () => {
    await fetchRooms(currentUser.uid)
  }

  useEffect(() => {
    getRooms()
    fetchUser()
  }, [])

  return (
    <div className=" font-serif bg-green-300 h-screen">
      <ProfileNav />
      <div>
        <h1>Welcome back {user.userName}!</h1>
      </div>
      <div>
        {rooms[0] ? <RoomButtons rooms={rooms} roomIds={roomsId} /> : "HELLO"}
        <CreateRoomModal />
      </div>
    </div>
  )
}
