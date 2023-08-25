
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [search,Setsearch]=useState('')
  let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  return (
    <div>
        <h1>Search Item</h1>
        <input type='text' onChange={(event)=>Setsearch(event.target.value)}></input>
        <ul>
          {fruits.filter(element=> element.includes(search)).map(element=>{
            return (
              <li>{element}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default App
