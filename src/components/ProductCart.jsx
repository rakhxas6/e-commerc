import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, toggleLoveItem } from "../stores/Cart";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);

  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();

  const lovedItems = useSelector((state) => state.cart.lovedItems);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const handleToggleLove = () => {
    dispatch(toggleLoveItem(id));
  };

  const isLoved = lovedItems.includes(id);

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt=""
          className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"
        />
      </Link>
      <div className="flex justify-between items-center pt-3">
        <h3 className="text-2xl font-medium">{name}</h3>
        <button onClick={handleToggleLove} className="text-2xl">
          {isLoved ? (
            <FaHeart color="red" size={24} />
          ) : (
            <FaRegHeart color="gray" size={24} />
          )}
        </button>
      </div>
      <div className="flex justify-between items-center pt-3">
        <p>
          <span className="text-2xl font-medium">${price}</span>
        </p>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          <img src={cartIcon} alt="Cart Icon" className="w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
