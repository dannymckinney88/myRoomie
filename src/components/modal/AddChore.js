import { useState, useRef, useEffect } from "react"
import Modal from "./Modal"
import { useFirestore } from "../../contexts/FirestoreContext"

export default function AddChore(props) {
  // modal ref
  const modal = useRef(null)
  const { addChore } = useFirestore()

  const [userInfo, setUserInfo] = useState({})
  const [task, setTask] = useState("")
  const [option, setOption] = useState("")

  const handleName = (e) => {
    setUserInfo({ userName: e.target.value, complete: false })
  }

  const handTask = (e) => {
    setTask(e.target.value)
  }

  const handleOption = (e) => {
    setOption(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(task, userInfo, option)
    addChore(option, task, userInfo)
  }
  const options = props.options.map((option, index) => (
    <option key={index} value={option} id={index}>
      {option}
    </option>
  ))

  useEffect(() => {}, [])

  return (
    <div>
      <div>
        <button
          className="bg-white text-black rounded-full py-3 px-6 mt-6 "
          onClick={() => modal.current.open()}
        >
          {" "}
          Open me
        </button>
      </div>
      <Modal ref={modal}>
        <form>
          <div>
            <label
              htmlFor="chore"
              className="text-small font-bold text-white block my-1"
            >
              Who's doin the cleanin
            </label>
            <input
              onChange={handleName}
              className="w-full p-2 border border-gray-300 rounded mb-3"
              type="text"
              id="bill"
              name="bill"
              required
            />
          </div>
          <div>
            <label
              htmlFor="options"
              className="text-small font-bold text-white block my-1"
            >
              Options
            </label>
            <select
              onChange={handleOption}
              className="w-full p-2 border border-black-300 rounded mb-3"
              name="chores"
              value={option}
              required
            >
              <option value="none">Select option...</option>
              {options}
            </select>
          </div>
          <div>
            <label
              htmlFor="chore"
              className="text-small font-bold text-white block my-1"
            >
              Task
            </label>
            <input
              onChange={handTask}
              value={task}
              className="w-full p-2 border border-gray-300 rounded mb-3"
              type="text"
              id="bill"
              name="bill"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black rounded-full py-3 px-6 mt-6 "
            onClick={(e) => {
              handleSubmit(e)
              modal.current.close()
            }}
          >
            Add Chore
          </button>
        </form>
      </Modal>
    </div>
  )
}
