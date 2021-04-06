import React, { useState, useEffect } from "react"
import TabsContainer from "../components/TabsContainer"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { useFirestore } from "../contexts/FirestoreContext"

const Room = (props) => {
  const [roomId] = useState(props.match.params.id)
  const [roomName] = useState(props.match.params.name)

  const { fetchRoom, fetchBills, room } = useFirestore()

  useEffect(() => {
    fetchRoom(roomId)
    fetchBills()
  }, [])
  return (
    <div>
      <Link className="px-3" to="/profile">
        Home{" "}
      </Link>
      <h1>Welcome to {roomName}</h1>
      <TabsContainer roomId={roomId} />
    </div>
  )
}

export default Room
