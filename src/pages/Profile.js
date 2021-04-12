import React, { useState, useEffect, useRef } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { useAuth } from "../contexts/AuthContext"
import RoomButtons from "../components/RoomButtons"
import CreateRoomModal from "../components/modal/CreateRoomModal"
import ProfileNav from "../components/nav/ProfileNav"

export default function Profile(props) {
  const { rooms, roomsId, fetchRooms, addUser, bills } = useFirestore()

  // Auth & DB
  const { currentUser, logout } = useAuth()

  // Auth

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
