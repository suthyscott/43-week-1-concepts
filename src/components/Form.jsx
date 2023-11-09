import { useState } from "react"
import './Form.css'

const Form = (props) => {
    const [newItem, setNewItem] = useState("")

    return (
        <section id="form-container">
            <input onChange={event => setNewItem(event.target.value)} />

            <button onClick={() => props.setItems([newItem, ...props.items])}>
                Add Item
            </button>
        </section>
    )
}

export default Form
