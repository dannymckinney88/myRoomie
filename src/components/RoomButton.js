import React from "react"
import { Link } from "react-router-dom"

export default function RoomButton(props) {
  return (
    <div className="border rounded border-black p-8 bg-white">
      <h1>{props.room.roomName}</h1>
      <Link to={`/room/${props.roomId}/${props.room.roomName}`}> room</Link>
    </div>
  )
}
