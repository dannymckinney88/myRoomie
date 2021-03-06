import React, { useState } from "react"

export default function UserInput(props) {
  const [name, setName] = useState("")
  const [hide, setHide] = useState("block")
  const [selectValue, setSelectValue] = useState(props.user[0])

  const handleName = (e) => {
    setName(e.currentTarget.value)
  }

  const handleChange = (e) => {
    setSelectValue(e.target.value)
  }

  const options = props.user.map((name, index) => (
    <option key={index} value={name}>
      {name}
    </option>
  ))
  return (
    <div>
      <label for="cars" for="html">
        Choose Roomie
      </label>
      <select onChange={handleChange} value={selectValue}>
        {options}
        <option value="Tony">tony</option>
      </select>
      <button
        style={{ display: hide }}
        onClick={() => {
          props.handleUser(selectValue)
          setHide("none")
        }}
      >
        Confirm
      </button>
    </div>
  )
}
