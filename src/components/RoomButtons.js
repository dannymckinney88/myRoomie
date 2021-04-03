import React from "react"
import RoomButton from "./RoomButton"
export default function RoomButtons(props) {
  console.log(props.roomIds)
  const Rooms = props.rooms.map((room, index) => (
    <RoomButton room={room} roomId={props.roomIds[index - 0]} key={index} />
  ))
  return <div>{Rooms}</div>
}
