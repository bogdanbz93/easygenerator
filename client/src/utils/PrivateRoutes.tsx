import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
