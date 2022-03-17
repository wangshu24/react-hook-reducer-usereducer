import React from 'react'
import {ACTIONS} from './App.js'
export default function Todo({todo, dispatch}) {
  

    return (
    <div>
        <span 
        style={{color: todo.complete ? '#AAA' : '#000', textDecoration: todo.complete ? "line-through" : "none"}
            }>{todo.name}</span>
            
        <button onClick={()=> {dispatch({type: ACTIONS.TOGGLE,payload:{ID:todo.ID}})}}>Toggle</button>
        <button onClick={()=>{dispatch({type: ACTIONS.REMOVE, payload:{ID:todo.ID} } ) } }>Remove</button>
    </div>
  )
}
