import { Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Footer from './cutomer/components/Footer/Footer';
import Navigation from './cutomer/components/Navigation/Navigation';
import HomePage from './cutomer/components/pages/Homepage/HomePage';
import Product from './cutomer/components/Product/Product';
import ProductDetail from './cutomer/components/ProductDetails/ProductDetail';

function App() {
  return (
    <div className=''>
      <Navigation />
      <div>
        <Routes>
          {/* Define Routes for different pages */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path='productdetail' element={<ProductDetail />} />
        </Routes>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;