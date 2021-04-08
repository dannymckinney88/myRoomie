import React, { useState, useEffect } from "react"
import Chore from "./Chore"
import AddChore from "./modal/AddChore"
import ChoresBox from "../components/ChoresBox"
import { useFirestore } from "../contexts/FirestoreContext"

export default function ChoreContainer() {
  const { chores } = useFirestore()
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

  console.log(chores)

  const choresBox = options.map((item, index) => (
    <>
      {item == "Kitchen" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item == "Living Room" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item == "Frontyard" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item == "Backyard" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item == "Garage" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item == "Attic" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item == "Basement" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
      {item == "Other" && (
        <ChoresBox area={item} chores={kitchen} key={index} />
      )}
    </>
  ))

  const setCategories = () => {
    chores.forEach((item) => {
      console.log(item)
      if (item.area === "Kitchen") {
        setKitchen((oldArray) => [...oldArray, item])
      } else if (item.area === "Living Room") {
        setLivingRoom((oldArray) => [...oldArray, item])
      } else if (item.area === "Frontyard") {
        setFrontyard((oldArray) => [...oldArray, item])
      } else if (item.area === "Backyard") {
        setBackyard((oldArray) => [...oldArray, item])
      } else if (item.area === "Garage") {
        setGarage((oldArray) => [...oldArray, item])
      } else if (item.area === "Attic") {
        setAttic((oldArray) => [...oldArray, item])
      } else if (item.area === "Basement") {
        setBasement((oldArray) => [...oldArray, item])
      } else if (item.area === "Other") {
        setOther((oldArray) => [...oldArray, item])
      }
    })
  }

  useEffect(() => {
    setCategories()
  }, [])

  //   console.log(
  //     kitchen,
  //     livingRoom,
  //     frontyard,
  //     backyard,
  //     garage,
  //     attic,
  //     basement,
  //     other
  //   )

  //   const allChores = chores.map((chore) => (
  //     <>
  //       {chore.area == "Kitchen" && <ChoresBox choreInfo={chore} />}
  //       {chore.area == "Living Room" && <ChoresBox choreInfo={chore} />}
  //       {chore.area == "Frontyard" && <ChoresBox choreInfo={chore} />}
  //       {chore.area == "Backyard" && <ChoresBox choreInfo={chore} />}
  //       {chore.area == "Garage" && <ChoresBox choreInfo={chore} />}
  //       {chore.area == "Attic" && <ChoresBox choreInfo={chore} />}
  //       {chore.area == "Basement" && <ChoresBox choreInfo={chore} />}
  //       {chore.area == "Other" && <ChoresBox choreInfo={chore} />}
  //     </>
  //   ))

  return (
    <div>
      <AddChore options={options} />
      <div className="grid grid-cols-2 grid-rows-4 col-gap-4 row-gap-10">
        {choresBox}
      </div>
    </div>
  )
}
