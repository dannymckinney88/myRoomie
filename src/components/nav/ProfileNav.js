import React from "react"
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
    <nav class="group   hover:bg-white hover:shadow-lg hover:border-transparent h-16 p-2 ...">
      <Logo class="w-20 ml-3 pt-4" />
      <div className="flex justify-end content-center">
        <button onClick={handleLogout}>Sign out</button>
      </div>
    </nav>
  )
}
