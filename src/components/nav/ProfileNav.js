import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/myRoomie-logo/vector/default-monochrome.svg"
import { useAuth } from "../../contexts/AuthContext"

export default function ProfileNav(props) {
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    try {
      await logout()
      props.history.push("/login")
    } catch {}
  }
  return (
    <nav className="group flex justify-between  hover:bg-white hover:shadow-lg hover:border-transparent h-16 p-2">
      <h1></h1>
      <Logo className="w-20  pt-4" />
      <div className="flex justify-end content-center">
        <div className="mt-3">
          <Link to={"/notifications"}> Notifications</Link>
          <Link className="px-3" to="/profile">
            Home{" "}
          </Link>
        </div>
        <button onClick={handleLogout}>Sign out</button>
      </div>
    </nav>
  )
}
