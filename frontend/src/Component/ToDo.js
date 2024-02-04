import React from 'react'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const ToDo = ( { text, updateMode, deleteToDo }) => {
  return (
    <div className='todo'>
      <div className='text'>
            {text} </div>
            <div className='icons'>
            <MdDelete  className='icon' onClick={deleteToDo} />
            <CiEdit className='icon' onClick={updateMode} />
            </div>
    </div>
  )
}

export default ToDo