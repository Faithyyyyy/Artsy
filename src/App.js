import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Aunction from "./components/Aunctions";
import MarketPlace from "./components/Marketplace";
import Drop from "./components/Drop";
import NotFound from "./components/NotFound";
import Navigated from "./components/navigated";
import Cart from "./components/cart";
import { useState } from "react";
import data from "./data.json";
import EmptyCart from "./components/Emptycart";
import Shipping from "./components/Shipping";
import FinalCheckout from "./components/FinalCheckout";
import Successpage from "./components/Successpage";

function App() {
  const [cart, SetCart] = useState([]);
  const [yourName, setYourName] = useState("");
  const [notify, setNotify] = useState("hidden");

  const handleAddToCart = (item) => {
    if (!cart.includes(item)) {
      SetCart((prev) => [...prev, item]);
    }
  };
  let shipping = 40;
  let totalPrice = 0 + shipping;
  const handleIncrement = (card_id) => {
    SetCart((cart) =>
      cart.map((item) =>
        card_id === item.id
          ? {
              ...item,
              qty: item.qty + (item.qty < 10 ? 1 : 0),
            }
          : item
      )
    );
  };
  const handleDecrement = (card_id) => {
    SetCart((cart) =>
      cart.map((item) =>
        card_id === item.id
          ? {
              ...item,
              qty: item.qty - (item.qty > 1 ? 1 : 0),
            }
          : item
      )
    );
  };
  const handleName = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setYourName(value);
  };

  return (
    <div className=" ">
      <Nav notify={notify} setNotify={setNotify} cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="marketPlace"
          element={
            <MarketPlace product={data} handleAddToCart={handleAddToCart} />
          }
        ></Route>
        <Route
          path="/marketPlace/:id"
          element={
            <Navigated
              product={data}
              handleAddToCart={handleAddToCart}
              cart={cart}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          }
        ></Route>
        <Route path="aunction" element={<Aunction />}></Route>
        <Route
          path="sucesspage"
          element={<Successpage yourName={yourName} />}
        ></Route>
        <Route
          path="shippingcart"
          element={
            <Shipping
              cart={cart}
              setCart={SetCart}
              SetCart={SetCart}
              handleName={handleName}
              shipping={shipping}
              totalPrice={totalPrice}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          }
        ></Route>
        <Route path="emptycart" element={<EmptyCart />}></Route>
        <Route
          path="finalCheckout"
          element={
            <FinalCheckout
              cart={cart}
              setCart={SetCart}
              SetCart={SetCart}
              shipping={shipping}
              totalPrice={totalPrice}
            />
          }
        ></Route>
        <Route path="drop" element={<Drop />}></Route>
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              setCart={SetCart}
              shipping={shipping}
              totalPrice={totalPrice}
              SetCart={SetCart}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
