import React, { useContext } from "react"
import { db } from "../firebase"

const FirestoreContext = React.createContext()

export function useFirestore() {
  return useContext(FirestoreContext)
}

export function FirestoreProvider({ children }) {
  function addRoom(name, uid, userName) {
    return db.collection("rooms").add({
      name: name,
    })
    //   .collection("users")
    //   .doc(uid)
    //   .set({ name: userName })
  }

  const value = {
    addRoom,
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}
