import { useState } from "react"

const Item = ({ item, deleteItem, index, updateItem}) => {
    const [editing, setEditing] = useState(false)
    const [currentVal, setCurrentVal] = useState(item)

    return (
        <div>
            {editing ? (
                <div>
                    <input value={currentVal} onChange={e => setCurrentVal(e.target.value)}/>
                    <button onClick={() => {updateItem(index, currentVal); setEditing(false)}}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>{item}</p>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default Item
