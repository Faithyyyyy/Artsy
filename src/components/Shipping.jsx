import ShippingForm from "./ShippingForm";

import EmptyCart from "./Emptycart";
import { useLocation } from "react-router-dom";
import CartRender from "./CartRender";

// import SingleCart from "./Singlecart";
function Shipping({
  cart,
  handleName,
  SetCart,
  handleIncrement,
  handleDecrement,
  shipping,
  totalPrice,
}) {
  const location = useLocation();
  const state = location.state;

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="large:flex max-w-6xl mx-auto gap-16 large:mt-16 ">
      <ShippingForm handleName={handleName} state={state} />
      <div className="flex-grow hidden large:block">
        {" "}
        <>
          <CartRender
            cart={cart}
            shipping={shipping}
            totalPrice={totalPrice}
            SetCart={SetCart}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </>
      </div>
    </div>
  );
}

export default Shipping;
