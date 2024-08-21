import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toggleStatusTab } from "../stores/Cart";
import { useSelector, useDispatch } from "react-redux";

const CheckoutPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    // Simulating a successful payment
    setPaymentSuccess(true);
    dispatch(toggleStatusTab(false));
  };
  const handleHomeBtn = () => {
    navigate("/");
  };

  return (
    <div className="checkout-page bg-gray-100 h-96 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-md shadow-md text-center">
        {!paymentSuccess ? (
          <>
            <h2 className="text-3xl font-bold mb-5">Checkout</h2>
            <p className="text-lg mb-5">Total: $100</p>
            <button
              onClick={handleCheckout}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Checkout
            </button>
          </>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-5">Payment Successful!</h2>
            <p className="text-lg">Thank you for your purchase!</p>
            <button
              onClick={handleHomeBtn}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Go to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
