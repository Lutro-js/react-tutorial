// import logo from './logo.svg';
import './App.css'



import InputComponent from "./InputComponent"
import FilterComponent from "./FilterComponent"
import ListComponent from "./ListComponent"

import React, {useEffect, useState} from 'react'

export default function App() {
  const [todoItems, setTodoItems] = useState([])
  const addTodoItem = (title) => {
    setTodoItems([...todoItems,{id:todoItems.length+1, title:title, is_done:false}])
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
  
  return (
      <div>
        <InputComponent addTodoItem={addTodoItem}/>
        <FilterComponent/>
        <ListComponent todoItems={todoItems}/>
      </div>
  )
}



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
