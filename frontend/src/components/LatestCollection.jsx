import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <div id="collection" className="pt-32 pb-24 container-custom">
      <div className="text-center mb-20 mt-6  ">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">New Arrivals</h2>
        <p className="text-gray-500 max-w-lg mx-auto font-light leading-relaxed">
            Explore our latest additions, crafted with care and designed for the modern wardrobe.
        </p>
      </div>

      {/* Clean Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <a href="/collection" className="inline-block border-b border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
            View All Products
        </a>
      </div>
    </div>
  );
};

export default LatestCollection;
