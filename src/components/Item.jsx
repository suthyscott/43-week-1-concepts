const Item = ({item, deleteItem, index}) => {
    return (
        <div>
            <p>{item}</p>
            <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
    )
}

export default Item