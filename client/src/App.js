import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import { publicRoutes, userProtectedRoutes, adminProtectedRoutes } from './routes';

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
