import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "./store/todos";

function App() {
  const {todos, error, loading} = useSelector(state => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (loading) return <h1>Spinner</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div className="App">
      {todos.map(todo => (
          <li key={todo.id}>
            <h4>{todo.title}
            </h4>
          </li>
      ))}
    </div>
  );
}

export default App;
