import { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import layouts
import ContentLayout from '../layouts/ContentLayout';
import SidebarContentLayout from '../layouts/SidebarContentLayout';
// import public pages
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
// import user pages
import UserProfilePage from '../pages/user/UserProfilePage';
import UserOrdersPage from '../pages/user/UserOrdersPage';
import UserOrderDetailsPage from '../pages/user/UserOrderDetailsPage';
import UserCartDetailsPage from '../pages/user/UserCartDetailsPage';

// routes config
const publicRoutesConfig = [
    { path: '/', page: HomePage },
    { path: '/product-list', page: ProductListPage, layout: SidebarContentLayout },
    { path: '/product-details', page: ProductDetailsPage },
    { path: '/product-details/:id', page: ProductDetailsPage },
    { path: '/cart', page: CartPage },
    { path: '/register', page: RegisterPage },
    { path: '/login', page: LoginPage },
    { path: '*', page: NotFoundPage },
];
const userProtectedRoutesConfig = [
    { path: '/user', page: UserProfilePage },
    { path: '/user/orders', page: UserOrdersPage },
    { path: '/user/order-details', page: UserOrderDetailsPage },
    { path: '/user/cart-details', page: UserCartDetailsPage },
];

// create routes function
function createRoutes(routesConfig) {
    return routesConfig.map((config, index) => {
        //Layout
        let Layout = ContentLayout;
        if (config.layout) Layout = config.layout;
        if (config.layout === null) Layout = Fragment;
        //Page
        const Page = config.page;
        //Route
        return (
            <Route
                key={index}
                path={config.path}
                element={
                    <Layout>
                        <Page />
                    </Layout>
                }
            />
        );
    });
}

// routes
const publicRoutes = createRoutes(publicRoutesConfig);
const userProtectedRoutes = createRoutes(userProtectedRoutesConfig);

export { publicRoutes, userProtectedRoutes };
