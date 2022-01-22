import "./App.css";
import Header from "./components/Header";
import BasketPage from "./components/Basket/BasketPage";
import ListProducts from "./components/MainPage/ListProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListProducts />}></Route>
          <Route path="/basket" element={<BasketPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
