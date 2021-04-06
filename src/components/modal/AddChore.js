import { useState, useRef } from "react"
import Modal from "./Modal"

export default function AddChore() {
  // modal ref
  const modal = useRef(null)

  const [choreName, setChoreName] = useState("")
  const handleName = (e) => {
    setChoreName(e.target.value)
  }

  return (
    <div>
      <div>
        <button onClick={() => modal.current.open()}> Open me</button>
      </div>
      <Modal ref={modal}>
        <form>
          <div>
            <label
              htmlFor="chore"
              className="text-small font-bold text-gray-600 block py-1 pt-1"
            >
              Chore Name
            </label>
            <input
              onChange={handleName}
              value={choreName}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
              id="bill"
              name="bill"
            />
          </div>
          {/* <button type="submit" className="py-1 pt-4" onClick={handleBill}>
              Add Room
            </button> */}
        </form>
      </Modal>
    </div>
  )
}
