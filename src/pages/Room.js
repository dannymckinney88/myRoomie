import React, { useState, useEffect } from "react"
import TabsContainer from "../components/TabsContainer"
import { Link } from "react-router-dom"
import { db } from "../firebase"

const Room = (props) => {
  const [roomId] = useState(props.match.params.id)
  const [roomName] = useState(props.match.params.name)
  const [roomRef] = useState(db.collection("rooms").doc(roomId))
  console.log(roomId, roomName)

  const fetchRoom = async () => {}
  roomRef.get().then((doc) => {
    if (doc.exists) {
      console.log("doc data:", doc.data())
    } else {
      console.log("no such doc")
    }
  })

  useEffect(() => {
    fetchRoom()
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
