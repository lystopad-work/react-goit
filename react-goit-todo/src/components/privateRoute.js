import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({isAuth, children, redirectTo}) => {

    if (!isAuth) return <Navigate to={redirectTo} />

    return children ? children : <Outlet />;
}

export default PrivateRoute