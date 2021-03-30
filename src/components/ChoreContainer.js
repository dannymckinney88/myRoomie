import React, {useState} from 'react'
import Chore from "./Chore"
import Modal from "./Modal"



export default function ChoreContainer() {
    //usestate for modal display
    const [show,setShow] = useState(false)
    //setting state to blank text
    const [task, setTask] = useState([
        {
            text:"",
            isCompleted: false
        }
    ])
    const showModal = (e) =>{setShow(true)} //shows modal
    const closeModal = (e) =>{setShow(false)}//closes modal

    const addTask = text => {
        const newTask = [...task, { text }];
        setTask(newTask); 
    };

    function TaskForm({addTask}) {
        const [value, setValue] = useState("");
        const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
        };
        return (
        <form onSubmit={handleSubmit}>
            <label>Enter Chore</label>
            <input
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
        </form>
        );
    }

    return (
        <div>
            <Chore/>
            <button onClick={e => showModal()}>
                show modal
            </button>
            <Modal showModal={show} closeModal={closeModal}>
            </Modal>
        </div>
    )
}
