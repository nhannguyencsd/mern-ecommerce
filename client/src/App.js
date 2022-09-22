import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import { publicRoutes, userProtectedRoutes } from './routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes}
                <Route element={<ProtectedRoutes />}>{userProtectedRoutes}</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
