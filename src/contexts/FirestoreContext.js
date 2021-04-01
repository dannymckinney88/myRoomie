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
  const addRoom = async (name, uid) => {
    return roomRef.add({
      name: name,
      users: [uid],
    })
  }
  const addUserSub = async (uid, userName, roomId) => {
    return roomRef.doc(roomId).collection("occupants").add({
      name: userName,
      uid: uid,
    })
  }

  // -Reads
  const getRooms = async (userId) => {
    return db.collectionGroup("users").where("uid", "==", userId)
  }

  const value = {
    addRoom,
    addUserSub,
    getRooms,
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}
