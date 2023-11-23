import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent/MyComponent";


const data = {
  title: 'My title',
  text: 'Some text'
}

function App() {
  return (
    <div className="App">
      <MyComponent
      item={data}
      />
    </div>
  );
}

export default App;
