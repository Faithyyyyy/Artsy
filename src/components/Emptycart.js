import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex  flex-col justify-center items-center mt-12 px-5">
      <AiOutlineShoppingCart className="text-9xl" />
      <div>
        <p className="font-satoshi font-semibold text-lg text-center mt-11">
          Your cart is empty!
        </p>
        <p className="font-satoshi text text-center ">
          Browse our marketplace and discover our best products!
        </p>
        <Link to="/marketPlace">
          <button className="w-3/4 max-w-xs mx-auto py-4 grid self-center mt-8 rounded-lg font-satoshi text-lg border border-black">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;

// {cart.map((item) => {
//   return (
//     <div
//       className="flex gap-4 py-8 md:border-y border-[#747474]"
//       key={item.id}
//     >
//       <img
//         src={item.image}
//         alt="cart"
//         className="w-36 h-36 md:w-48 md:h-48"
//       />
//       <div className="flex-grow flex flex-col justify-between">
//         <div className="flex justify-between item-center">
//           <h5 className="font-satoshi text-xl">
//             {item.name.replace(item.name[0], item.name[0].toUpperCase())}
//           </h5>
//           <img src={exit} alt="" className="w-10 h-10" />
//         </div>
//         <p className="font-satoshi text-lg text-[#616161]">Ali Dawa</p>
//         <p className="font-satoshi text-lg text-black hidden md:block">
//           {" "}
//           <span className="text-[#616161]">Size </span>200ft
//         </p>
//         <div className="flex justify-between">
//           <p className="border border-black md:border-0 flex justify-between items-center px-2 rounded-lg font-satoshi text-xl md:text-2xl">
//             <span className="pr-2 md:pr-0">-</span>
//             <span className="border-x border-black  md:border-0 px-4 md:text-3xl">
//               1
//             </span>
//             <span className="pl-2 md:pl-0">+</span>
//           </p>
//           <p className="text-black font-cardo text-xl md:text-2xl">
//             ${item.price}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// })}
