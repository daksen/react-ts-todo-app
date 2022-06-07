import { TodoProvider } from './context/TodoProvider';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import './App.css'


function App() {
  return (
    <div className="main">
      <div className="context">
        <div className="container d-flex justify-content-center w-100">
          <div className="colxs-12 col-sm-6">
            <TodoProvider>
              <TodoHeader />
              <TodoList />
            </TodoProvider>
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          { Array.from(Array(10).keys()).map((i) => <li key={i} />) }
        </ul>
      </div >
    </div>
  );
}

export default App;
