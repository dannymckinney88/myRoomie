import React, { useState } from "react"
import TabsContainer from "../components/TabsContainer"
import { Link } from "react-router-dom"

const Room = (props) => {
  const [roomId] = useState(props.match.params.id)
  const [roomName] = useState(props.match.params.name)
  console.log(roomId, roomName)
  return (
    <div>
      <Link className="px-3" to="/profile">
        Home{" "}
      </Link>
      <h1>Welcome to {roomName}</h1>
      <TabsContainer />
    </div>
  )
}

export default Room
