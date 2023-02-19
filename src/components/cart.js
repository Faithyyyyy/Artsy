import EmptyCart from "./Emptycart";
import SingleCart from "./Singlecart";

function Cart({
  cart,

  SetCart,
  handleIncrement,
  handleDecrement,
  shipping,
  totalPrice,
}) {
  if (cart.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <SingleCart
        cart={cart}
        shipping={shipping}
        totalPrice={totalPrice}
        SetCart={SetCart}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    );
  }
}

export default Cart;
