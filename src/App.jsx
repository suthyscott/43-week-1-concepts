import './App.css';
import Child from './Child';
import Item from './Item';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(['bread', 'milk', 'apple', 'eggs'])
  const [newItem, setNewItem] = useState('')

  console.log(newItem)
  return (
    <div className="App">
      <h1>App.js</h1>
      {/* <Child username={'scott'} userId={343}/> */}
      <Item item={items[0]}/>
      <Item item={items[1]}/>
      <Item item={items[2]}/>
      <Item item={items[3]}/>
      <Item item={items[4]}/>
      <Item item={items[5]}/>

      <div>
        <input onChange={event => setNewItem(event.target.value)} />
        <button onClick={() => setItems([newItem, ...items])}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
