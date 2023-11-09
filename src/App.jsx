import "./App.css"
import Child from "./components/Child"
import Item from "./components/Item"
import Form from './components/Form'
import { useState } from "react"

function App() {
    const [items, setItems] = useState(["bread", "milk", "apple", "eggs"])

    const deleteItem = index => {
      items.splice(index, 1)
      setItems([...items])
    }

    const updateItem = (index, newVal) => {
        items.splice(index, 1, newVal)
        setItems([...items])
    }

    // const itemsList = items.map((element, index) => {
    //   return <Item item={element}/>
    // })

    return (
        <main className="App">

            <section>
            {items.map((element, index) => {
                return <Item item={element} deleteItem={deleteItem} index={index} updateItem={updateItem}/>
            })}
            </section>

            <Form items={items} setItems={setItems}/>
        </main>
    )
}

export default App
