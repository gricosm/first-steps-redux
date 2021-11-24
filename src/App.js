import './App.css';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <LoginPage />
        <ToDoList />
        <ToDoForm />
      </header>
    </div>
  );
}

export default App;
