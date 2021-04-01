import React, { useState } from "react"

export default function UserInput(props) {
  const [name, setName] = useState("")
  const [hide, setHide] = useState("block")

  const handleName = (e) => {
    setName(e.target.value)
    console.log(name)
  }
  return (
    <div>
      <label htmlFor="" className="text-small font-bold text-gray-600 block">
        User
      </label>
      <input
        onChange={handleName}
        value={name}
        className="w-full p-2 border border-gray-300 rounded mt-1"
        type="text"
        id="bill"
        name="bill"
      />
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
