import React, { useContext, useState } from "react"
import { db } from "../firebase"

const FirestoreContext = React.createContext()

export function useFirestore() {
  return useContext(FirestoreContext)
}

export function FirestoreProvider({ children }) {
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState({})
  const [roomsId, setRoomsId] = useState([])
  const [roomId, setRoomId] = useState()
  const [bills, setBills] = useState([])
  const [chores, setChores] = useState([])

  // Room API
  // -------- Writes

  const roomRef = db.collection("rooms")

  const addUser = (userName, email, uid) => {
    return db.collection("users").doc(uid).set({
      userName: userName,
      email: email,
      uid: uid,
    })
  }
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

  const addBill = (name, amount, usersArray) => {
    const users = []
    usersArray.forEach((user) => {
      console.log(user)
      if (user.paid === true) {
        users.push(user)
      }
    })
    return roomRef.doc(roomId).collection("Bills").add({
      billName: name,
      totalAmount: amount,
      users: users,
    })
  }

  const addChore = async (area, task, user) => {
    await roomRef
      .doc(roomId)
      .collection("Chores")
      .add({
        area: area,
        task: task,
        user: user,
      })
      .then((doc) => {
        console.log("doc created with id -", doc.id)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // ------------ Reads
  const fetchRooms = async (uid) => {
    if (rooms.length < 1) {
      await db
        .collection("rooms")
        .where("userIds", "array-contains", uid)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
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
    console.log(roomId)
    await db
      .collection("rooms")
      .doc(roomId)
      .get()
      .then((doc) => {
        setRoom(doc.data())
        setRoomId(doc.id)
      })
  }

  // All bills for a room
  const fetchBills = async () => {
    setBills([])
    db.collection("rooms")
      .doc(roomId)
      .collection("Bills")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // console.log(doc.data())
          setBills((oldArray) => [...oldArray, doc.data()])
        })
      })
  }

  const fetchChores = async () => {
    setChores([])
    roomRef
      .doc(roomId)
      .collection("Chores")
      .get()
      .then((snapshot) => {
        snapshot.forEach((chore) => {
          setChores((oldArray) => [...oldArray, chore.data()])
          console.log(chore.data())
        })
      })
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
    addUser,
    addRoom,
    addUserSub,
    rooms,
    roomsId,
    roomId,
    fetchRooms,
    room,
    fetchRoom,
    fetchBills,
    bills,
    addBill,
    addChore,
    fetchChores,
    chores,
  }

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}
