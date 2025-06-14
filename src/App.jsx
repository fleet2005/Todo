import './index.css'
import {useState, useEffect} from 'react'

const Todo = () => {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);

  const addTask = () => {
      setId(id+1);
      setTaskList([...taskList, {id : id, task : task}]);
  }

  const removeTask = (e) => {
      setTaskList(taskList.filter((element, index, array)=>{
        return element.id != Number(e.target.id);
      }));          
  }

  const resetId = () => {
    setId(1);
  }

  return (
      <>
          {taskList.map((element)=>{
            return(
            <div>
              {element.id}
              {element.task}
              {<button id = {element.id} onClick = {removeTask}>Remove</button>}
            </div>
            )
          })}

          <input type = "text" onChange = {(e)=>{
            setTask(e.target.value)
          }}/>

          <button onClick = {addTask}>Add</button>
          <button onClick = {resetId}>ResetId</button>
      </>
  )
}

export default Todo;


// When your function uses {} (a function body), you must explicitly write return to return anything, including JSX.

// When returning multi-line JSX, always wrap it in parentheses () to avoid syntax errors and improve readability.