import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import './Main.css';
export const Main = () => {
    return (
        <div className='main-wrapper-container'>
            <Header />
            <main className='web-layout main-background'>
                <Outlet />
            </main>
        </div>
    )
}