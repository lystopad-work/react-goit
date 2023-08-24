import {NavLink} from "react-router-dom";
export const Navbar = ({children}) => {
    return (
        <ul className='header-nav'>
            <NavLink to='/home'>
                Home
            </NavLink>
            <NavLink to='/signup'>
                Registration
            </NavLink>
            <NavLink to='/login'>
                Login
            </NavLink>
            {children}
        </ul>
    )
}