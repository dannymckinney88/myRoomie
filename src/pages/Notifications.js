import React, { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"
import Notification from "../components/Notification"
import ProfileNav from "../components/nav/ProfileNav.js"
import AcceptRequest from "../components/modal/AcceptRequest"

export default function Notifications() {
  const [notifications, setNotifications] = useState([])
  const { currentUser } = useAuth()

  useEffect(() => {
    setNotifications([])
    const unsubscribe = db
      .collection("request")
      .where("userEmail", "==", currentUser.email)
      .onSnapshot((snapshot) => {
        const list = []
        console.log(snapshot.docs)
        snapshot.docs.forEach((doc) => {
          list.push({ data: doc.data(), id: doc.id })
        })
        console.log(list)
        setNotifications(list)
      })

    return () => unsubscribe()
  }, [])
  console.log(notifications)

  //   if (notifications.length >= 1) {
  //     const allRequest = notifications.map((notification, index) => (
  //       <Notification key={index} request={notification} />
  //     ))
  //   }

  return (
    <div>
      <ProfileNav />
      <div>
        {notifications.length >= 1
          ? notifications.map((notification, index) => (
              <Notification key={index} request={notification} />
            ))
          : ""}
      </div>
    </div>
  )
}
