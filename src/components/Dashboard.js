import React, { useState } from "react"
import AddUser from "./modal/AddUser"

const Dashboard = (props) => {
  const [show, setShow] = useState(false)

  const showModal = (e) => {
    setShow(true)
  }

  const closeModal = (e) => {
    setShow(false)
  }

  return (
    <>
      <div>DashBoard</div>
      <AddUser roomId={props.roomId} roomName={props.roomName} />
    </>
  )
}

export default Dashboard
