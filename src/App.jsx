import './App.css';
import Child from './Child';

function App() {
  let username = 'Scott'
  return (
    <div className="App">
      <h1>App.js</h1>
      <Child username={'scott'} userId={343}/>
    </div>
  );
}

export default App;
