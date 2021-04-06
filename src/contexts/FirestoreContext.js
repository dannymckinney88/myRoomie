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
  const [roomId, setRoomId] = useState()
  const [bills, setBills] = useState([])
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
    if (rooms.length < 1) {
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
  }

  const fetchRoom = async (roomId) => {
    db.collection("rooms")
      .doc(roomId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("doc Data :", doc.data())
          setRoom(doc.data())
          setRoomId(doc.id)
          console.log(doc.id)
        }
      })
  }

  // All bills for a room
  const fetchBills = async () => {
    if (bills.length < 1) {
      db.collection("rooms")
        .doc(roomId)
        .collection("Bills")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            setBills((oldArray) => [...oldArray, doc.data()])
            console.log(doc.id, "+>", doc.data())
          })
        })
    }
  }

  // Fetchs all bills of a spefic user
  // const fetchBills = async () => {
  //   db.collectionGroup("Bills")
  //     .where("users", "array-contains", "Danny")
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         console.log(doc.id, "=>", doc.data())
  //       })
  //     })
  // }

  const value = {
    addRoom,
    addUserSub,
    rooms,
    roomsId,
    roomId,
    fetchRooms,
    room,
    fetchRoom,
    fetchBills,
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}
