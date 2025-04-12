import React from 'react'
import './style.css'
import { useState } from 'react'

const Todo = () => {
  const [todo,setTodo]=useState([]);
  const [input,setInput]=useState("");

  const handleSubmit=()=>{

   

    const newTodo={
      id:Math.random()*10,
      todo:input
    }


    setTodo([...todo,newTodo]);
    console.log(todo);
    setInput("");
    
  }

  const handleDelete=(id)=>{
    setTodo(prevTodo=>(prevTodo.filter(todo=>todo.id!==id)));

  }
  return (
    <div className="Container">
      <div className="Task_container">
        <div className='Main_container'>
        <div className="Heading_container">
          <h5>ToDo</h5>
        </div>
        <div className="Body_container">
          <input type="text" placeholder="New Todo"
          value={input} onChange={(e)=>setInput(e.target.value)}></input>
          <button onClick={handleSubmit}>+ Submit</button>
        </div>
        <div className='Todo_container'>
          <ul>
            {todo.map(item=>(
              <li key={item.id}><span> <div className='box'></div> </span>{item.todo} <button onClick={()=>handleDelete(item.id)} className='close'>x</button> </li>
            ))}
            
          </ul>
        </div>

        </div>
        
        

      </div>

    </div>
      
  )
}

export default Todo