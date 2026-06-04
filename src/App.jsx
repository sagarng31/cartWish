import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import CartPage from "./components/Cart/CartPage";
import MyOrder from "./components/MyOrder/MyOrder";
import LoginPage from "./components/Auth/LoginPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <main>All Routing</main> */}
      {/* <Home /> */}
      {/* <ProductsPage /> */}
      {/* <SingleProduct /> */}
      {/* <CartPage /> */}
      {/* <MyOrder /> */}
      <LoginPage />
    </div>
  );
};

export default App;
