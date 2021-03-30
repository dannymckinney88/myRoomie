import React, {useState} from "react";
import Modal from './Modal'

const Dashboard = () => {
const [show,setShow]=useState(false)

const showModal = (e) =>{
    setShow(true)
}

const closeModal = (e) =>{
  setShow(false)
}

  return (
    <>
      <div>DashBoard</div>
        <button onClick={e => showModal()}>
          show modal
        </button>
      <Modal showModal={show} closeModal={closeModal} >
        <label>hello</label>
        <input type="text" />
        <label>moto</label>
        <input type="text" />
      </Modal>
    </>
  );
};

export default Dashboard;
