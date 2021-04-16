import React from "react"
import AcceptRequest from "../components/modal/AcceptRequest"

export default function Notification(props) {
  const handleRoom = (e) => {
    e.preventDefault()
    // db.collection("rooms").doc(props.roomId).update({})
  }
  console.log(props.request.data.roomId)
  return (
    <div>
      <div>
        <p>You have an invitation to join:</p>
        <p> {props.request.data.roomName}</p>
      </div>
      <div>
        <AcceptRequest
          requestId={props.request.id}
          roomId={props.request.data.roomId}
        />
        <button
          type="submit"
          className="bg-black text-white rounded-full py-3 px-6 mt-6 "
          onClick={handleRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  )
}
