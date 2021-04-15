import React, { useState, useEffect } from "react"
// import Chore from "./Chore"
import AddChore from "./modal/AddChore"
import ChoresBox from "../components/ChoresBox"
import { useFirestore } from "../contexts/FirestoreContext"
import { db } from "../firebase"

export default function ChoreContainer(props) {
  // const { chores } = useFirestore()
  const [chores, setChores] = useState([])
  const [options] = useState([
    "Kitchen",
    "Living Room",
    "Frontyard",
    "Backyard",
    "Garage",
    "Attic",
    "Basement",
    "Other",
  ])
  const [kitchen, setKitchen] = useState([])
  const [livingRoom, setLivingRoom] = useState([])
  const [frontyard, setFrontyard] = useState([])
  const [backyard, setBackyard] = useState([])
  const [garage, setGarage] = useState([])
  const [attic, setAttic] = useState([])
  const [basement, setBasement] = useState([])
  const [other, setOther] = useState([])

  const choresBox = options.map((item, index) => (
    <React.Fragment key={index}>
      {item === "Kitchen" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item === "Living Room" && (
        <ChoresBox area={item} chores={livingRoom} key={index} />
      )}
      {item === "Frontyard" && (
        <ChoresBox area={item} chores={frontyard} key={index} />
      )}
      {item === "Backyard" && (
        <ChoresBox area={item} chores={backyard} key={index} />
      )}
      {item === "Garage" && (
        <ChoresBox area={item} chores={garage} key={index} />
      )}
      {item === "Attic" && <ChoresBox area={item} chores={attic} key={index} />}
      {item === "Basement" && (
        <ChoresBox area={item} chores={basement} key={index} />
      )}
      {item === "Other" && <ChoresBox area={item} chores={other} key={index} />}
    </React.Fragment>
  ))

  useEffect(() => {
    setChores([])
    setKitchen([])
    setLivingRoom([])
    setFrontyard([])
    setBackyard([])
    setAttic([])
    setBasement([])
    setOther([])
    setGarage([])
    const unsubscribe = db
      .collection("rooms")
      .doc(props.roomId)
      .collection("Chores")
      .onSnapshot((snapshot) => {
        const list = []
        console.log(snapshot.docs)
        snapshot.docs.forEach((doc) => {
          setChores((arr) => [...arr, { data: doc.data(), id: doc.id }])
        })
        // console.log(list)
        // setChores(list)
      })
    return () => unsubscribe()
  }, [])

  const setCategories = () => {
    setKitchen([])
    setLivingRoom([])
    setFrontyard([])
    setBackyard([])
    setAttic([])
    setBasement([])
    setOther([])
    setGarage([])
    console.log(chores)
    chores.forEach((item) => {
      console.log(item)
      if (item.data.area === "Kitchen") {
        setKitchen((oldArray) => [...oldArray, item])
      } else if (item.data.area === "Living Room") {
        setLivingRoom((oldArray) => [...oldArray, item])
        console.log(livingRoom)
      } else if (item.data.area === "Frontyard") {
        setFrontyard((oldArray) => [...oldArray, item])
      } else if (item.data.area === "Backyard") {
        setBackyard((oldArray) => [...oldArray, item])
      } else if (item.data.area === "Garage") {
        setGarage((oldArray) => [...oldArray, item])
      } else if (item.data.area === "Attic") {
        setAttic((oldArray) => [...oldArray, item])
      } else if (item.data.area === "Basement") {
        setBasement((oldArray) => [...oldArray, item])
      } else if (item.data.area === "Other") {
        setOther((oldArray) => [...oldArray, item])
      }
    })
  }

  useEffect(() => {
    setCategories()
  }, [chores])

  return (
    <div>
      <AddChore options={options} />
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 col-gap-4 row-gap-10 container mx-auto">
        {choresBox}
      </div>
    </div>
  )
}
