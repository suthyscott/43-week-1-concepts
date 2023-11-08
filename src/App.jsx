import "./App.css"
import Child from "./Child"
import Item from "./Item"
import Form from './Form'
import { useState } from "react"

function App() {
    const [items, setItems] = useState(["bread", "milk", "apple", "eggs"])

    const deleteItem = index => {
      items.splice(index, 1)
      setItems([...items])
    }

    // const itemsList = items.map((element, index) => {
    //   return <Item item={element}/>
    // })

    return (
        <div className="App">
            <h1>App.js</h1>

            {items.map((element, index) => {
                return <Item item={element} deleteItem={deleteItem} index={index}/>
            })}

            <Form items={items} setItems={setItems}/>
        </div>
    )
}

export default App
