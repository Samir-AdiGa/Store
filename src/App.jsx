import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import ProductDetails from './pages/products-info/ProductDetails';
import MyCart from './pages/cart/MyCart';
import LoginPage from './pages/auth/login/LoginPage';
import RegisterPage from './pages/auth/register/RegisterPage';
import VerificationPage from './pages/auth/verify/VerificationPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
      {/* استقبال معرف المنتج id ديناميكياً وإغلاق الوسم بشكل صحيح */}
      <Route path="product-details/:id" element={<ProductDetails />} />
      <Route path="my-cart" element={<MyCart />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="verify" element={<VerificationPage />} />
    </Routes>
  );
};

export default App;