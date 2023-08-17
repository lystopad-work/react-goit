import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchTodos, selectCompletedTodos, selectTodos, selectTodosCountDifference} from "./store/todos";
import './App.css';
import {useGetAllTodosQuery, useGetTodoByIdQuery, useRemoveTodoByIdMutation} from "./store/todosQuery";

function App() {
  const [currentTodo, setCurrentTodo] = useState(null);

  const {data: todos, isLoading, isError} = useGetAllTodosQuery();
  const {data: todo} = useGetTodoByIdQuery(currentTodo);
  const [removeTodo, removeTodoResult] = useRemoveTodoByIdMutation();

  console.log(removeTodo)

  const onRemoveTodoClick = (e, id) => {
    e.stopPropagation();

    removeTodo(id)
  }


  if (isLoading) return <h1>Spinner</h1>

  if (isError) return <h1>Error message</h1>

  return (
    <div className="App">
      {todos.map(todo => (
          <li key={todo.id} className='todo-item-wrapper' onClick={() => setCurrentTodo(todo.id)}>
            <h4 className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              {todo.title}
            </h4>
            <button type='button' onClick={(e) => onRemoveTodoClick(e, todo.id)}>
              Remove
            </button>
          </li>
      ))}
    </div>
  );
}

export default App;
