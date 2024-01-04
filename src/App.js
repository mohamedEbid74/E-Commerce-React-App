import "./App.css";
import Navbaar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory.js";
import Products from "./pages/Products.js";
import LogInSignUp from "./pages/LogInSignUp.js";
import Cart from "./pages/Cart.js";
import Footer from "./Components/Footer/Footer.js";
import men_banner from "./Assets/banner_mens.png";
import woman_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";

function App() {
  return (
    <>
      <Navbaar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route
          path='/mens'
          element={<ShopCategory banner={men_banner} category='men' />}
        />
        <Route
          path='/womans'
          element={<ShopCategory banner={woman_banner} category='women' />}
        />
        <Route
          path='/kids'
          element={<ShopCategory banner={kid_banner} category='kid' />}
        />
        <Route path='/products' element={<Products />}>
          <Route path=':productId' element={<Products />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='login' element={<LogInSignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
