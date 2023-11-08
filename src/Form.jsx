import { useState } from "react"

const Form = (props) => {
    const [newItem, setNewItem] = useState("")

    return (
        <div>
            <input onChange={event => setNewItem(event.target.value)} />

            <button onClick={() => props.setItems([newItem, ...props.items])}>
                Add Item
            </button>
        </div>
    )
}

export default Form
