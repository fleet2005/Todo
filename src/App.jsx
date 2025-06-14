import './index.css'
import {useState, useEffect} from 'react'

const Todo = () => {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
      setTaskList([...taskList, task]);
  }

  const removeTask = () => {
      setTaskList(taskList.filter((element, index, array)=>{
        return index!=array.length-1;
      }));          
  }

  return (
      <>
          {taskList.map((element)=>{
            return(
            <div>
              {element}
            </div>
            )
          })}

          <input type = "text" onChange = {(e)=>{
            setTask(e.target.value)
          }}/>

          <button onClick = {addTask}>Add</button>
          <button onClick = {removeTask}>Remove</button>
      </>
  )
}

export default Todo;


// When your function uses {} (a function body), you must explicitly write return to return anything, including JSX.

// When returning multi-line JSX, always wrap it in parentheses () to avoid syntax errors and improve readability.