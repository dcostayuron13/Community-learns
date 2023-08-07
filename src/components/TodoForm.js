import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
     const [value, setValue] =useState("")

     const handleSubmit = e =>{
        e.preventDefualt(); 
         
        addTodo(value)

     }
  return (
    <form className='TosoForm' onSubmit={handleSubmit}><input type="text" className='todo-input' placeholder='What is your task today' onChange={(e) => setValue(e.target.value)} />

    <button type='submit' className='todo-btn'>Add Task</button>
    </form> 
  )
}
