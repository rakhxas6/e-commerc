import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { toggleStatusTab } from "../stores/Cart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckoutBtn = () => {
    navigate("/checkout");
  };
  const handleCloseBtn = () => {
    dispatch(toggleStatusTab());
    // alert("Checkout button clicked");
  };
  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5 ">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>

      <div className="grid grid-cols-2">
        <button onClick={handleCloseBtn} className="bg-black text-white">
          ClOSE
        </button>
        <button onClick={handleCheckoutBtn} className="bg-amber-600 text-white">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
