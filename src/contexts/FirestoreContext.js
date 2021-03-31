import React, { useContext } from "react"
import { db } from "../firebase"

const FirestoreContext = React.createContext()

export function useFirestore() {
  return useContext(FirestoreContext)
}

export function FirestoreProvider({ children }) {
  // Room API
  // - Writes
  const roomRef = db.collection("rooms")
  const addRoom = async (name) => {
    return roomRef.add({
      name: name,
    })
  }
  const addUserSub = async (uid, userName, roomId) => {
    return roomRef.doc(roomId).collection("users").add({
      name: userName,
      uid: uid,
    })
  }

  // -Reads
  const getRooms = async () => {}

  const value = {
    addRoom,
    addUserSub,
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}
