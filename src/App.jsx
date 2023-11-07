import './App.css';
import Child from './Child';
import Item from './Item';

function App() {
  const items = ['bread', 'milk', 'apple', 'eggs']
  return (
    <div className="App">
      <h1>App.js</h1>
      {/* <Child username={'scott'} userId={343}/> */}
      <Item item={items[0]}/>
      <Item item={items[1]}/>
      <Item item={items[2]}/>
      <Item item={items[3]}/>
      <Item item={items[4]}/>

      <div>
        {/* <input /> */}
        <button onClick={() => items.push('juice')}>Add juice</button>
      </div>
    </div>
  );
}

export default App;
