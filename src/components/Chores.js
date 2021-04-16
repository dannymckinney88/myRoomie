import React from "react"
import Chore from "./Chore"

export default function Chores(props) {
  const allChores = props.chores.map((chores, index) => (
    <Chore chore={chores} key={index} />
  ))

  return <>{allChores}</>
}
