import { Fragment } from 'react';
import { Route } from 'react-router-dom';
// import layouts
import ContentLayout from '../layouts/ContentLayout/ContentLayoutIndex';
import SidebarContentLayout from '../layouts/SidebarContentLayout/SidebarContentLayoutIndex';
import AdminLayout from '../layouts/AdminLayout/AdminLayoutIndex';
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
// import admin pages
import AdminUsersPage from '../pages/admin/AdminUsersPage';
import AdminEditUserPage from '../pages/admin/AdminEditUserPage';
import AdminProductsPage from '../pages/admin/AdminProductsPage';
import AdminCreateProductPage from '../pages/admin/AdminCreateProductPage';
import AdminEditProductPage from '../pages/admin/AdminEditProductPage';
import AdminOrdersPage from '../pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from '../pages/admin/AdminOrderDetailsPage';
import AdminChatsPage from '../pages/admin/AdminChatsPage';
import AdminAnalyticsPage from '../pages/admin/AdminAnalyticsPage';

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
const adminProtectedRoutesConfig = [
    { path: '/admin/users', page: AdminUsersPage, layout: AdminLayout },
    { path: '/admin/edit-users', page: AdminEditUserPage, layout: AdminLayout },
    { path: '/admin/products', page: AdminProductsPage, layout: AdminLayout },
    { path: '/admin/create-new-product', page: AdminCreateProductPage, layout: AdminLayout },
    { path: '/admin/edit-product', page: AdminEditProductPage, layout: AdminLayout },
    { path: '/admin/orders', page: AdminOrdersPage, layout: AdminLayout },
    { path: '/admin/order-details', page: AdminOrderDetailsPage, layout: AdminLayout },
    { path: '/admin/chats', page: AdminChatsPage, layout: AdminLayout },
    { path: '/admin/analytics', page: AdminAnalyticsPage, layout: AdminLayout },
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
const adminProtectedRoutes = createRoutes(adminProtectedRoutesConfig);

export { publicRoutes, userProtectedRoutes, adminProtectedRoutes };
