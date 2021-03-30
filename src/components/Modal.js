import React from "react"

export default function Modal(props) {
    
    return (
        <>
            {!props.showModal ? null : 
            <div>
                <div> 
                    {props.children} 
                </div>
                <button onClick={props.closeModal}>Close</button>
            </div>}
        </>
    )
}

