import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ListProducts from "./components/ListProducts";
import DescriptionProduct from "./components/DescriptionProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListProducts />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/description-product"
            element={<DescriptionProduct />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
