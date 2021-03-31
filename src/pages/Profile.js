import React, { useState } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { useAuth } from "../contexts/AuthContext"

// import { Tabs } from "@feuer/react-tabs";
import { Link } from "react-router-dom"

export default function Profile(props) {
  // var
  // const [roomId, setRoomId] = useState("")
  const [error, setError] = useState("")
  // Auth & DB
  const { currentUser, logout } = useAuth()
  const { addRoom, addUserSub } = useFirestore()

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
    await addRoom("Last house")
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
        console.log(docRef)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <Link className="px-3" to="/room">
          Room{" "}
        </Link>
      </div>
      <button className="bg-black text-white" onClick={handleLogout}>
        Sign Out
      </button>
      <button onClick={handleAddRoom}>Add Room</button>
    </div>
  )
}
