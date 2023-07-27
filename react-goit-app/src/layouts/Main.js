import {Header} from "./Header";
import {Outlet} from "react-router-dom";

export const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}