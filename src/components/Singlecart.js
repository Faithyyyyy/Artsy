import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartRender from "./CartRender";

function SingleCart({
  cart,
  SetCart,
  handleIncrement,
  handleDecrement,
  shipping,
  totalPrice,
}) {
  const nav = useNavigate();

  return (
    <div className="px-5 large:pl-0 max-w-6xl mx-auto ">
      <div className="my-10 ">
        <p className="mb-8 font-satoshi font-medium ">
          <span className="text-[#BCB7B7]">Home/</span>
          <span className="text-[#BCB7B7]">Marketplace/</span>
          <span className="text-black">Cart</span>
        </p>
        <div className="bg-[#3A3A3A] rounded-4xl max-w-lg mx-auto flex px-8 justify-between items-center py-3.5 md:hidden ">
          <button className="bg-white rounded-4xl text-black py-1.5 px-8  text-lg font-satoshi">
            Shop
          </button>
          <p className="text-white text-lg font-satoshi">Scheduled</p>
        </div>
      </div>

      <CartRender
        cart={cart}
        shipping={shipping}
        totalPrice={totalPrice}
        SetCart={SetCart}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />

      <div className="flex flex-col md:relative -top-44  max-w-[620px] mx-auto md:mx-0 flex-1  items-center justify-center gap-8 md:items-start md:order-1 ">
        <Link
          to="/shippingcart"
          className="w-[80%] max-w-[320px]   lg:max-w-[520px] bg-[#3341C1] h-[57px] rounded-sm text-white font-satoshi flex items-center justify-center  text-lg md:text-xl"
        >
          Proceed to checkout
        </Link>
        <Link
          to="/marketPlace"
          className="text-[#006CA2] underline font-satoshi  text-xl"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default SingleCart;
