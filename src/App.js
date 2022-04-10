import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  function clickMe(){
    alert("hello")
  }
  return (
    <div className="App">
    <Dashboard></Dashboard>
    </div>
  );
}

export default App;
