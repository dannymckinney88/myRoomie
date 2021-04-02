import React, { useState } from "react"

export default function UserInput(props) {
  const [name, setName] = useState("")
  const [hide, setHide] = useState("block")

  const handleName = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const options = props.user.map((name) => <option value={name}>{name}</option>)
  return (
    <div>
      <label for="cars">Choose Roomie</label>
      <select>{options}</select>
      <button
        style={{ display: hide }}
        onClick={() => {
          props.handleUser()
          setHide("none")
        }}
      >
        Confirm
      </button>
    </div>
  )
}
