import {useState} from "react";
import {signup} from "../store/auth";
import {useDispatch} from "react-redux";

export const RegisterForm = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');

    const dispatch = useDispatch();

    const handleEmailChange = (e) => setEmailValue(e.target.value)
    const handlePasswordChange = (e) => setPasswordValue(e.target.value)
    const handleUsernameChange = (e) => setUsernameValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signup({email: emailValue, password: passwordValue, username: usernameValue}))
    }

    return (
        <form onSubmit={handleSubmit} className='auth-form'>
            <input type="text" value={emailValue} onChange={handleEmailChange}/>
            <input type="text" value={passwordValue} onChange={handlePasswordChange}/>
            <input type="text" value={usernameValue} onChange={handleUsernameChange}/>
            <button type='submit'>
                SIGNUP
            </button>
        </form>
    )
}