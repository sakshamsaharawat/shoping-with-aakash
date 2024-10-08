import { Routes, Route } from 'react-router-dom';
import HomePage from '../cutomer/components/pages/Homepage/HomePage';
import Product from '../cutomer/components/Product/Product';
import ProductDetail from '../cutomer/components/ProductDetails/ProductDetail';
import Cart from '../cutomer/components/Cart/Cart';
import CheckOut from '../cutomer/components/CheckOut/CheckOut';
import Order from '../cutomer/components/Order/Order';
import OrderDetails from '../cutomer/components/Order/OrderDetails';
import AuthModel from '../Auth/AuthModal';

const CustomerRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/:levelOne/:levelTwo/lavelThree" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/account/order" element={<Order />} />
            <Route path="/account/order/:orderId" element={<OrderDetails />} />
            <Route path="/signUp" element={<HomePage />} />
            <Route path="/authmodal" element={<AuthModel />} />
            <Route path="/login" element={<HomePage/>} />



        </Routes>
    );
};

export default CustomerRouter;