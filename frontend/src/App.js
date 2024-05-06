




import { useEffect, useState } from 'react';
import './App.css';
import ToDo from './Component/ToDo';
import { addToDo, getAllToDo, updateToDo,deleteToDo } from './utils/HandleApi';

function App() {
  const [todo,setToDo] = useState([])
   const [text, setText]= useState("")
   const [isUpdate, setIsUpdate] = useState (false)
   const [todoId, setToDoId] = useState("")


  useEffect(()=>{
    getAllToDo(setToDo)

  },[])

  const updateMode = (_id, text) =>{
    setIsUpdate(true)
    setText(text)
    setToDo(_id)

  }
  return (
    <div className="App">
     <div className=' container'>
     <h2>Hello Todo App</h2>
     <div className='top'>   
<input 
    type='text'
    placeholder='Add Todo.....'
    value={text}
    onChange={(e) => setText(e.target.value)}  // Update the text state
/>

<div
    className="add"
    onClick={isUpdate ?
        () => updateToDo(todoId, text, setToDo, setText, setIsUpdate)
        :
        () => addToDo(text, setText, setToDo)  // Fix the addToDo function invocation
    }
>
    {isUpdate ? "Update" : "Add"}
</div> 






<div className="list">
  {Array.isArray(todo) && todo.map((item) => (
    <ToDo
      key={item._id}
      text={item.text}
      updateMode={() => updateMode(item._id, item.text)}
      deleteToDo={() => deleteToDo(item._id, setToDo)}
    />
  ))}
</div>




<ToDo text ="Hiii"/>


     </div>

     </div>
     
     </div>
  );
}

export default App;