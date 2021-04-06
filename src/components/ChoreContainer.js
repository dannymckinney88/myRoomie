import React, { useState } from "react"
import Chore from "./Chore"
import AddChore from "./modal/AddChore"

export default function ChoreContainer() {
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

  return (
    <div>
      <AddChore />
    </div>
  )
}
