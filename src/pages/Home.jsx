import React from "react";
import { products } from "../product";
import ProductCart from "../components/ProductCart"

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my-5">LIST PRODUCTS</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
        {
          products.map((product, key) => 
            <ProductCart key={key} data={product} />
          )
        }
      </div>

    </div>
  );
};

export default Home;
