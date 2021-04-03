import React from "react"
import { Link } from "react-router-dom"

export default function RoomButton(props) {
  console.log(props.roomId)
  return (
    <div>
      <h1>{props.room.name}</h1>
      <Link to={`/room/${props.roomId}/${props.room.name}`}> room</Link>
    </div>
  )
}
