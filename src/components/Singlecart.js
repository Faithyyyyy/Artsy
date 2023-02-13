import exit from "./../images/exit.png";

import { Link } from "react-router-dom";

function SingleCart({
  cart,
  cartItemNo,
  handlecartItemNo,
  SetCart,
  handleIncrement,
  handleDecrement,
}) {
  const removeCartItem = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);
    SetCart(filterCart);
  };
  let totalPrice = parseFloat("10.547892").toFixed(2);
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

      {cart.map((item, index) => {
        totalPrice += item.price * item.qty;
        return (
          <div
            className="flex gap-4 py-8 md:border-y-[0.5px] border-[#747474] "
            key={item.id}
          >
            <img
              src={item.image}
              alt="cart"
              className="w-36 h-36 md:w-48 md:h-48"
            />
            <div className="flex-grow flex flex-col justify-between">
              <div className="flex justify-between item-center">
                <h5 className="font-satoshi text-sm md:text-xl">
                  {item.name.replace(item.name[0], item.name[0].toUpperCase())}
                </h5>
                <img
                  src={exit}
                  alt=""
                  className="w-10 h-10"
                  onClick={() => removeCartItem(item.id)}
                />
              </div>
              <p className="font-satoshi text-sm  md:text-lg text-[#616161]">
                Ali Dawa
              </p>
              <p className="font-satoshi text-lg text-black hidden md:block">
                {" "}
                <span className="text-[#616161]">Size </span>200ft
              </p>
              <div className="flex justify-between">
                <p className="border border-black md:border-0 flex justify-between items-center px-2 rounded-lg font-satoshi text-xl md:text-2xl">
                  <span
                    className="pr-2 md:pr-0 cursor-pointer"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </span>
                  <span className="border-x border-black  md:border-0 px-4 md:text-xl">
                    {item.qty}
                  </span>
                  <span
                    className="pl-2 md:pl-0 cursor-pointer"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </span>
                </p>
                <p className="text-black font-cardo text-xl md:text-2xl">
                  ${Math.trunc(item.price)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col gap-12 md:gap-0 justify-between  md:flex-row mb-12  mt-16">
        <div className="grid gap-6 md:order-2 md:w-[400px]">
          <div className="flex justify-between text-xl font-satoshi">
            <p className="text-[#888888] ">Products in cart : </p>
            <p>{cart.length} items</p>
          </div>
          <div className="flex justify-between text-xl font-satoshi">
            <p className="text-[#888888] ">Shipping : </p>
            <p>$80.69</p>
          </div>
          <div className="flex justify-between text-xl font-satoshi">
            <p className="text-[#888888] ">Total : </p>
            <p>${totalPrice}</p>
          </div>
        </div>
        <div className="flex flex-col  max-w-[620px] flex-1  items-center justify-center gap-8 md:items-start md:order-1 ">
          <Link
            to="/shippingcart"
            className="w-[80%] max-w-[590px] bg-[#3341C1] h-[57px] rounded-sm text-white font-satoshi flex items-center justify-center  text-lg md:text-xl"
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
    </div>
  );
}

export default SingleCart;
