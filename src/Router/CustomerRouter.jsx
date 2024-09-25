import { Routes, Route } from 'react-router-dom';
import HomePage from '../cutomer/components/pages/Homepage/HomePage';
import Product from '../cutomer/components/Product/Product';
import ProductDetail from '../cutomer/components/ProductDetails/ProductDetail';
import Cart from '../cutomer/components/Cart/Cart';
import CheckOut from '../cutomer/components/CheckOut/CheckOut';
import Order from '../cutomer/components/Order/Order';
import OrderDetails from '../cutomer/components/Order/OrderDetails';

const CustomerRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orderdetails" element={<OrderDetails />} />
        </Routes>
    );
};

export default CustomerRouter;