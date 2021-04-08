import React, { useState, useEffect } from "react"
import TabsContainer from "../components/TabsContainer"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { useFirestore } from "../contexts/FirestoreContext"

const Room = (props) => {
  const [roomId] = useState(props.match.params.id)
  const [roomName] = useState(props.match.params.name)

  const [bills, setBills] = useState([])

  const { fetchRoom, fetchChores } = useFirestore()


  const fetchBills = () => {
    console.log(roomId)
    db.collection("rooms")
      .doc(roomId)
      .collection("Bills")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data())
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
      <Link className="px-3" to="/profile">
        Home{" "}
      </Link>
      <h1>Welcome to {roomName}</h1>
      <TabsContainer roomId={roomId} bills={bills} />
    </div>
  )
}

export default Room
