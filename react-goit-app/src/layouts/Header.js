import {NavLink} from "react-router-dom";
import {Logo} from "../elements/logo";
import './Header.css'
import {CardsListPage} from "../pages/CardsListPage";

const navs = [
    {
      url: '/',
      text: 'Home'
    },
    {
        url: '/cards',
        text: 'Cards'
    }
];
export const Header = () => {

    return (
        <header>
            <nav className="navigation web-layout">
                <NavLink children={<Logo />} to='/' />
                <ul className='nav-items-container'>
                    {navs.map(nav => (
                        <NavLink to={nav.url} children={nav.text} className='nav-item'/>
                    ))}
                </ul>
            </nav>
        </header>
    )
}