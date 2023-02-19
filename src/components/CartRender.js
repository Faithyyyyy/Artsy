import exit from "./../images/exit.png";

function CartRender({
  cart,
  SetCart,
  handleIncrement,
  handleDecrement,
  shipping,
  totalPrice,
}) {
  const removeCartItem = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);
    SetCart(filterCart);
  };

  return (
    <>
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
                  ${item.price * item.qty}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col gap-12 md:gap-0 md:justify-end   md:flex-row mb-12  mt-16">
        <div className="grid gap-6 md:order-2 md:w-[400px]">
          <div className="flex justify-between text-xl font-satoshi">
            <p className="text-[#888888] ">Products in cart : </p>
            <p>{cart.length} items</p>
          </div>
          <div className="flex  justify-between text-xl font-satoshi">
            <p className="text-[#888888] ">Shipping : </p>
            <p>${shipping}</p>
          </div>
          <div className="flex justify-between text-xl font-satoshi">
            <p className="text-[#888888] ">Total : </p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartRender;
