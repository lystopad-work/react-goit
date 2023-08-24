import {Navigate, Outlet} from "react-router-dom";
export const PublicRoute = ({children, isVisible, redirectTo}) => {
    if (isVisible) return <Navigate to={redirectTo} />

    return children ? children : <Outlet />;
 }