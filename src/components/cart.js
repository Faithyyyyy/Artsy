import EmptyCart from "./Emptycart";
import SingleCart from "./Singlecart";

function Cart({
  cart,
  cartItemNo,
  handlecartItemNo,
  SetCart,
  handleIncrement,
  handleDecrement,
}) {
  if (cart.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <SingleCart
        cart={cart}
        // cartItemNo={cartItemNo}
        // handlecartItemNo={handlecartItemNo}
        SetCart={SetCart}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    );
  }
}

export default Cart;
