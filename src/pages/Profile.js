import React, { useState, useEffect } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import RoomButtons from "../components/RoomButtons"
import { Link } from "react-router-dom"

export default function Profile(props) {
  const [error, setError] = useState("")
  const [rooms, setRooms] = useState([])
  const [roomsId, setRoomsId] = useState([])
  // Auth & DB
  const { currentUser, logout } = useAuth()
  const { addRoom, addUserSub, getRooms } = useFirestore()

  console.log(currentUser.uid)

  async function handleLogout() {
    setError("")

    try {
      await logout()
      props.history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  async function handleAddRoom() {
    await addRoom("The Cove", currentUser.uid)
      .then((docRef) => {
        handleUserSubcollection(docRef.id)
      })
      .catch((error) => {
        console.log(error)
      })
    // console.log(roomId)
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

  // Firesotre Calls
  useEffect(async () => {
    await fetchRooms()
  }, [])

  return (
    <div>
      <h1>Profile</h1>
      <div>
        {rooms[0] ? <RoomButtons rooms={rooms} roomIds={roomsId} /> : "loading"}
      </div>
      <button className="bg-black text-white" onClick={handleLogout}>
        Sign Out
      </button>
      <button onClick={handleAddRoom}>Add Room</button>
    </div>
  )
}
