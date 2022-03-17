import {useReducer, useState} from 'react';
import Todo from './Todo.js'

export const ACTIONS = {
  ADD_TODO : 'addTodo',
  TOGGLE : 'toogleTodo',
  REMOVE: 'remove',
  REMOVE_COMPLETED: 'removeCompleted',
}

function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name) ]
      case ACTIONS.TOGGLE:
        return todos.map(todo => {
          if(todo.ID === action.payload.ID){
            return {...todo, complete: !todo.complete}
          } return todo
        })
      case ACTIONS.REMOVE:
        return todos.filter(todo => todo.ID !== action.payload.ID)
      case ACTIONS.REMOVE_COMPLETED:
        return  
      default:
        return todos   
    }
  }
  
function newTodo(name) {
  return {name: name, ID: Date.now(), complete: false}
}

function App() {

  const [todos, dispatch] = useReducer(reducer, [])  
  const [name,setName] = useState('')

  function handleSubmit(e){
    e.preventDefault() 
    dispatch({type: ACTIONS.ADD_TODO, payload:{name: name}})
    setName('')
    console.log([todos])
  }

  return (
   <>
   <form onSubmit={handleSubmit}>
     <input type="text" value={name} onChange={e => setName(e.target.value)}/>
   </form>
   <button>REMOVE COMPLETED</button>
   {todos.map(todo => {
     return <Todo  key={todo.ID} todo={todo} dispatch={dispatch}></Todo>
   })}
   </>
  );
}

export default App;
