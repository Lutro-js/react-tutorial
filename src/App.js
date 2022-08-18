// import logo from './logo.svg';
import './App.css'



import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"

import React, {useEffect, useState} from 'react'

export default function App() {
  const [todoItems, setTodoItems] = useState([])
    //0:すべて1:完了2:未完了
  const [filterStatus, setFilterStatus] = useState(0)
  const addTodoItem = (title) => {
    setTodoItems([...todoItems,{id:todoItems.length+1, title:title, is_done:false}])
  } 
  
  const updateStatusTodoItem = (id) => {
    setTodoItems(todoItems.map(todoItem => {
      if (todoItem.id === id) {
          todoItem.is_done = !todoItem.is_done
      }
      return todoItem
    }))
  }

  const removeTodoItem = (id) => {
    setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
  }



  return (
    <div className="wrapper">
      <InputComponent addTodoItem={addTodoItem}/>
      <FilterComponent setFilterStatus={setFilterStatus}/> 
      <ListComponent todoItems={todoItems} updateStatusTodoItem={updateStatusTodoItem} removeTodoItem={removeTodoItem} filterStatus={filterStatus}/>
    </div>
  )
}






  /*useEffect(() => {
    (async () => {
      setTodoItems([
        {id:1,title:'aaa',is_done:false},
        {id:2,title:'iii',is_done:true},
        {id:3,title:'uuu',is_done:false},
        {id:4,title:'eee',is_done:true},
        {id:5,title:'ooo',is_done:false},
      ])
    })()
  },[])*/
  
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
