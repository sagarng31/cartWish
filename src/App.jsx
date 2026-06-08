import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";

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
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      <Routing />
    </div>
  );
};

export default App;
