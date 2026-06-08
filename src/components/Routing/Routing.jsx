import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import ProductsPage from "../Products/ProductsPage";
import SingleProduct from "../SingleProduct/SingleProduct";
import CartPage from "../Cart/CartPage";
import MyOrder from "../MyOrder/MyOrder";
import LoginPage from "../Auth/LoginPage";
import SignupPage from "../Auth/SignupPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/my-orders" element={<MyOrder />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Routing;
