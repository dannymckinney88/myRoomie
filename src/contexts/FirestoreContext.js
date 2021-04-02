import React, { useContext, useState } from "react"
import { db } from "../firebase"

const FirestoreContext = React.createContext()

export function useFirestore() {
  return useContext(FirestoreContext)
}

export function FirestoreProvider({ children }) {
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState("")
  const [roomsId, setRoomsId] = useState([])
  // Room API
  // - Writes
  const roomRef = db.collection("rooms")
  const addRoom = async (roonnName, uid, userName) => {
    return roomRef.add({
      roomName: roonnName,
      userIds: [uid],
      userNames: [userName],
    })
  }
  const addUserSub = async (uid, userName, roomId) => {
    return roomRef.doc(roomId).collection("occupants").add({
      userName: userName,
      uid: uid,
    })
  }

  // -- Reads
  const fetchRooms = async (uid) => {
    await db
      .collection("rooms")
      .where("userIds", "array-contains", uid)
      .get()
      .then((snapshot) => {
        console.log(uid)
        snapshot.forEach((doc) => {
          console.log(doc.id)
          setRooms((oldArray) => [...oldArray, doc.data()])
          setRoomsId((oldArray) => [...oldArray, doc.id])
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const fetchRoom = async (roomId) => {
    db.collection("rooms")
      .doc(roomId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("doc Data :", doc.data())
          setRoom(doc.data())
        }
      })
  }

  const value = {
    addRoom,
    addUserSub,
    rooms,
    roomsId,
    fetchRooms,
    room,
    fetchRoom,
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}
