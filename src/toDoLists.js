import React from "react";

const ToDoLists = (props) => {
    return (
    <div className="container row my-4">
        <i className="fa fa-close col" aria-hidden="true" onClick={()=>{props.onSelect(props.id)}}></i>
        <li className="col-8">{props.text}</li>
    </div>
    )
}

export default ToDoLists;