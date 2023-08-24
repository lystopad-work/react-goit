import {useState} from "react";
import {login} from "../store/auth";
import {useDispatch} from "react-redux";

export const LoginForm = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const dispatch = useDispatch();
    const handleEmailChange = (e) => setEmailValue(e.target.value)
    const handlePasswordChange = (e) => setPasswordValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({email: emailValue, password: passwordValue}))
    }

    return (
        <form onSubmit={handleSubmit} className='auth-form'>
            <input type="text" value={emailValue} onChange={handleEmailChange}/>
            <input type="text" value={passwordValue} onChange={handlePasswordChange}/>
            <button type='submit'>
                LOGIN
            </button>
        </form>
    )
}