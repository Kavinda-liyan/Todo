import React from 'react'
import './style.css'

const Todo = () => {
  return (
    <div className="Container">
      <div className="Task_container">
        <div className='Main_container'>
        <div className="Heading_container">
          <h5>ToDo</h5>
        </div>
        <div className="Body_container">
          <input type="text"></input>
          <button type="submit">+ Submit</button>
        </div>

        </div>
        

      </div>

    </div>
      
  )
}

export default Todo