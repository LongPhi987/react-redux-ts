import React from 'react'
import { useSelector } from 'react-redux'
import { todoSelector } from '../redux/Reducers/TodoSlice'

function Navbar() {
  const lengthTodo=useSelector(todoSelector)
  return (
    <div className='navbar'>
        <h1>My Redux App</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Total Todos:{lengthTodo.length}</li>
        </ul>
    </div>
  )
}

export default Navbar