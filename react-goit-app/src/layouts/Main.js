import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import './Main.css';
import {Suspense} from "react";
export const Main = () => {
    return (
        <div className='main-wrapper-container'>
            <Header />
            <main className='web-layout main-background'>
                <Suspense fallback={<h1>SUSPENSE</h1>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}