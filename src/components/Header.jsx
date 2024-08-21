import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cartIcon from "../assets/images/iconCart.png"
import { useDispatch, useSelector } from 'react-redux'
import {toggleStatusTab} from "../stores/Cart"

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0)
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total)
  },[carts])

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <header className=" flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold ">
        FurniHome.
      </Link>
      <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative">
        <img
          src={cartIcon}
          alt=""
          className="w-6"
          onClick={handleOpenTabCart}
        />
        <span className="absolute top-2/3 right-1/2 text-white bg-red-500 text-sm w-5 h-5 rounded-full flex justify-center items-center">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
}

export default Header