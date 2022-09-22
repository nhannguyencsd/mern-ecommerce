import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes({ isAdminRoute }) {
    if (isAdminRoute) {
        let isAdminAuth = true;
        return isAdminAuth ? <Outlet /> : <Navigate to="/login" />;
    } else {
        let isUserAuth = true;
        return isUserAuth ? <Outlet /> : <Navigate to="/login" />;
    }
}

export default ProtectedRoutes;
