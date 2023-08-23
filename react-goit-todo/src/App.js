import './App.css';
import {useGetAllTodosQuery, useRemoveTodoByIdMutation} from "./store/todosQuery";
import {TodosList} from "./components/todosList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser, login, logOut} from "./store/auth";

function App() {

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const {data: todos, isLoading, isError} = useGetAllTodosQuery();
  const [removeTodo, removeTodoResult] = useRemoveTodoByIdMutation();

  const {user, isAuth} = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const onRemoveTodoClick = (e, id) => {
    e.stopPropagation();

    removeTodo(id)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({email: emailValue, password: passwordValue}))

    console.log('submitted')
  }

  const handleEmailChange = (e) => setEmailValue(e.target.value)
  const handlePasswordChange = (e) => setPasswordValue(e.target.value)

  const handleLogout = () => {
    dispatch(logOut())
  }

  if (isLoading) return <h1>Spinner</h1>

  if (isError) return <h1>Error message</h1>

  return (
    <div className="App">
      <div className='header'>
        <h2>CurrentUser Is : {user.email}</h2>
        <h5>{isAuth && 'ISAUTH'}</h5>
        {isAuth &&
          <button onClick={handleLogout}>
            LOGOUT
          </button>
        }
      </div>
      {!isAuth &&
        <form onSubmit={handleSubmit} className='auth-form'>
          <input type="text" value={emailValue} onChange={handleEmailChange}/>
          <input type="text" value={passwordValue} onChange={handlePasswordChange}/>
          <button type='submit'>
            SUBMIT
          </button>
        </form>
      }
      <TodosList onRemoveTodoClick={onRemoveTodoClick} todos={todos}/>
    </div>
  );
}

export default App;
