import React, { useState, useEffect } from "react"
import TabsContainer from "../components/TabsContainer"
import ProfileNav from "../components/nav/ProfileNav"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { useFirestore } from "../contexts/FirestoreContext"

const Room = (props) => {
  const [roomId] = useState(props.match.params.id)
  const [roomName] = useState(props.match.params.name)

  const [bills, setBills] = useState([])

  const { fetchRoom, fetchChores, addUser } = useFirestore()

  const fetchBills = () => {
    console.log(roomId)
    db.collection("rooms")
      .doc(roomId)
      .collection("Bills")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setBills((oldArray) => [...oldArray, doc.data()])
        })
      })
    console.log(bills)
  }

  useEffect(() => {
    async function run() {
      await fetchRoom(roomId)
      await fetchBills()
      await fetchChores()
    }
    run()
  }, [])
  return (
    <div>
      <ProfileNav />
      <Link className="px-3" to="/profile">
        Home{" "}
      </Link>
      <h1>Welcome to {roomName}</h1>
      <TabsContainer roomId={roomId} roomName={roomName} bills={bills} />
    </div>
  )
}

export default Room
