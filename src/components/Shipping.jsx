import ShippingForm from "./ShippingForm";
import exit from "./../images/exit.png";

// import SingleCart from "./Singlecart";
function Shipping({ cart, cartItemNo, handlecartItemNo, SetCart, handleName }) {
  const removeCartItem = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);
    SetCart(filterCart);
  };

  return (
    <div className="large:flex max-w-6xl mx-auto gap-16 large:mt-16">
      <ShippingForm handleName={handleName} />
      <div className="flex-grow hidden large:block">
        {" "}
        {cart.map((item) => {
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
                  <h5 className="font-satoshi text-xl">
                    {item.name.replace(
                      item.name[0],
                      item.name[0].toUpperCase()
                    )}
                  </h5>
                  <img
                    src={exit}
                    alt=""
                    className="w-10 h-10"
                    onClick={() => removeCartItem(item.id)}
                  />
                </div>
                <p className="font-satoshi text-lg text-[#616161]">Ali Dawa</p>
                <p className="font-satoshi text-lg text-black hidden md:block">
                  {" "}
                  <span className="text-[#616161]">Size </span>200ft
                </p>
                <div className="flex justify-between">
                  <p className="border border-black md:border-0 flex justify-between items-center px-2 rounded-lg font-satoshi text-xl md:text-2xl">
                    <span className="pr-2 md:pr-0 cursor-pointer">-</span>
                    <span className="border-x border-black  md:border-0 px-4 md:text-xl">
                      {cartItemNo}
                    </span>
                    <span
                      className="pl-2 md:pl-0 cursor-pointer"
                      onClick={() => {
                        handlecartItemNo(item.id);
                      }}
                    >
                      +
                    </span>
                  </p>
                  <p className="text-black font-cardo text-xl md:text-2xl">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="grid gap-6 md:order-2 mt-10">
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
            <p>3 items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
