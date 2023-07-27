import {NavLink} from "react-router-dom";
import {Logo} from "../elements/logo";
import './Header.css'
import {useContext} from "react";
import {ModalContext} from "../App";
import {navs} from "../constants/navigations";
export const Header = () => {

    const {setIsModal} = useContext(ModalContext);

    return (
        <header className='header'>
            <nav className="navigation web-layout">
                <NavLink children={<Logo />} to='/' />
                <ul className='nav-items-container'>
                    {navs.map(nav => (
                        <NavLink to={nav.url} children={nav.text} className='nav-item'/>
                    ))}
                    <li>
                        <button type='button' onClick={setIsModal}>
                            Contact Us
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}