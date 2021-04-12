import React, { useState, useEffect } from "react"
import ChoreContainer from "./ChoreContainer"
import { db } from "../firebase"

export default function Chores(props) {
  // const [chores, setChores] = useState()

  // useEffect(async () => {
  //   const unsubscribe = db
  //     .collection("rooms")
  //     .doc(props.roomId)
  //     .collection("Chores")
  //     .onSnapshot((snapshot) => {
  //       const data = snapshot.docs.map((doc) => doc.data())
  //       setChores(data)
  //     })

  //   console.log(chores)
  //   return () => unsubscribe()
  // }, [])
  return (
    <div>
      <ChoreContainer roomId={props.roomId} chores={chores} />
    </div>
  )
}
