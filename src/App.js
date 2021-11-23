import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
        <ToDoForm />
      </header>
    </div>
  );
}

export default App;
