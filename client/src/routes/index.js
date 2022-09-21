import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ContentLayout from '../layouts/ContentLayout';
import SidebarContentLayout from '../layouts/SidebarContentLayout';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

// routes config
let publicRoutesConfig = [
    { path: '/', page: HomePage },
    { path: '/product-list', page: ProductListPage, layout: SidebarContentLayout },
    { path: '/product-details', page: ProductDetailsPage },
    { path: '/product-details/:id', page: ProductDetailsPage },
    { path: '/cart', page: CartPage },
    { path: '/register', page: RegisterPage },
    { path: '/login', page: LoginPage },
    { path: '*', page: NotFoundPage },
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

export { publicRoutes };
