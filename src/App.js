import "./App.css";
import Header from "./components/Header";
import BasketPage from "./components/Basket/BasketPage";
import ListProducts from "./components/MainPage/ListProducts";
import DescriptionProduct from "./components/DescriptionProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListProducts />}></Route>
          <Route path="/basket" element={<BasketPage />}></Route>
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
