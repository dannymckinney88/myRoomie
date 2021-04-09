import React from "react"
import RoomButton from "./RoomButton"
export default function RoomButtons(props) {
  const Rooms = props.rooms.map((room, index) => (
    <RoomButton room={room} roomId={props.roomIds[index - 0]} key={index} />
  ))
  return (
    <div className=" m-8 ">
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Rooms}
      </div>
    </div>
  )
}
