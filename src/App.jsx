import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./pages/cart/Cart";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import UpdateProduct from "./pages/updateProduct/UpdateProduct";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={user ? <Cart /> : <Navigate to="/" />} />
          <Route
            path="/products/:id"
            element={user ? <Product /> : <Navigate to="/" />}
          />
          <Route
            path="/products"
            element={user ? <ProductList /> : <Navigate to="/" />}
          />

          <Route
            path="/updateProduct/:id"
            element={user ? <UpdateProduct /> : <Navigate to="/" />}
          />
          
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
