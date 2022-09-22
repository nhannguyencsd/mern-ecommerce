import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { publicRoutes, userProtectedRoutes, adminProtectedRoutes } from './routes/createRoutes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes}
                <Route element={<ProtectedRoutes isAdminRoute={false} />}>{userProtectedRoutes}</Route>
                <Route element={<ProtectedRoutes isAdminRoute={true} />}>{adminProtectedRoutes}</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
