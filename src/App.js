import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Todos from './component/Todos'
import TodoForm from './component/TodoForm'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <TodoForm/>
        <Todos/>
    </div>
  );
}

export default App;
