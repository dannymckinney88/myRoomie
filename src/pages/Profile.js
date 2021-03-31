import React, { useState } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { useAuth } from "../contexts/AuthContext"

// import { Tabs } from "@feuer/react-tabs";
import { Link } from "react-router-dom"

export default function Profile(props) {
  // console.log(FirestoreService.auth.currentUser.uid)
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState("")
  const { addRoom } = useFirestore()

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
    await addRoom("33", currentUser.uid, "Antonio")
      .then((docRef) => {
        console.log("docRed", docRef.id)
      })
      .catch((error) => {
        console.log(error)
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
