import './App.css';
import {useState} from 'react';
import ToDoLists from './toDoLists';

function App() {
  const [inputList, setInputList] = useState(""); 
  const [Items, setItmes] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = ()=> {
    setItmes((oldItems)=>{
      return [...oldItems, inputList];
    })
    setInputList("")
  }

  const deleteItems = (id)=>{
    console.log("deleted" + id);

    setItmes((oldItems) => {
      return oldItems.filter((arrElem, index) =>{
          return index !== id;
        })
    }
    )} 

  return (
    <div className="card container mt-5 py-4">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="d-flex">
        <input className="form-control me-2" type="text" value={inputList} placeholder="Add New Item" onChange={itemEvent} aria-label="Search" required/>
        <button className="btn btn-success" onClick={listOfItems}>Add</button>
      </div>

      <ol>
        { /*inputList*/ }
        {Items.map((itemval, index)=>{
          return <ToDoLists key={index} id={index} text = {itemval} onSelect = {deleteItems}/>
        })}
      </ol>
    </div>
  );
}

export default App;
