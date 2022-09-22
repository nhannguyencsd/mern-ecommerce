import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {
    let isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
