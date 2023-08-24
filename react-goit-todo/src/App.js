import './App.css';
import {useGetAllTodosQuery, useRemoveTodoByIdMutation} from "./store/todosQuery";
import {TodosList} from "./components/todosList";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser, logOut} from "./store/auth";
import {LoginForm} from "./components/loginForm";
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar";
import PrivateRoute from "./components/privateRoute";
import {RegisterForm} from "./components/registerForm";
import {PublicRoute} from "./components/publicRoute";
function App() {

  const {data: todos, isLoading} = useGetAllTodosQuery();
  const [removeTodo] = useRemoveTodoByIdMutation();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, []);

  const {user, isAuth, isUserFetching} = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const onRemoveTodoClick = (e, id) => {
    e.stopPropagation();

    removeTodo(id)
  }

  const handleLogout = () => {
    dispatch(logOut())
  }

  if (isLoading) return <h1>spinner</h1>

  return (
    <div className="App">
        <Navbar>
            {isAuth &&
                <div className='header'>
                    <h2>CurrentUser Is : {user.email}</h2>
                    <button onClick={handleLogout}>
                        LOGOUT
                    </button>
                </div>
            }
        </Navbar>
        {!isUserFetching &&
            <div>
                <Routes>
                    <Route element={<PrivateRoute isAuth={isAuth} redirectTo='/login'/>}>
                        <Route
                            path="home"
                            element={<TodosList onRemoveTodoClick={onRemoveTodoClick} todos={todos}/>}
                        />
                    </Route>
                    <Route element={<PublicRoute isVisible={isAuth} redirectTo='/home'/>}>
                        <Route path='login' element={<LoginForm />}/>
                        <Route path='signup' element={<RegisterForm />} />
                    </Route>
                </Routes>
            </div>
        }
    </div>
  );
}

export default App;