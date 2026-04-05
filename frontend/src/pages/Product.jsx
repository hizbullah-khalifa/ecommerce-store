import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-32 min-h-screen">
      <div className="container-custom flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left: Vertical Image Stack */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
            {productData.image.map((img, index) => (
                <div key={index} className="w-full bg-gray-50">
                    <img 
                        src={img} 
                        className="w-full h-auto object-cover" 
                        alt={`${productData.name} - View ${index + 1}`} 
                        loading="lazy"
                    />
                </div>
            ))}
        </div>

        {/* Right: Details (Sticky) */}
        <div className="w-full lg:w-[40%]">
            <div className="sticky top-32">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">{productData.name}</h1>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <p className="text-xl font-medium text-gray-900">{currency}{productData.price}</p>
                        {/* Mock Rating Display */}
                        <div className="flex items-center gap-1 text-yellow-500 text-sm">
                             <span>★★★★☆</span>
                             <span className="text-gray-400 ml-1">(12 Reviews)</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed font-light text-base">
                        {productData.description}
                    </p>
                </div>

                <div className="mb-10">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-500">Select Size</p>
                    <div className="flex gap-3 flex-wrap">
                        {productData.sizes.map((item, index) => (
                            <button
                                onClick={() => setSize(item)}
                                className={`w-12 h-12 flex items-center justify-center text-sm border transition-all duration-300 ${
                                    item === size ? "border-black bg-black text-white" : "border-gray-200 text-gray-600 hover:border-black"
                                }`}
                                key={index}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => addToCart(productData._id, size)}
                    className="w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors mb-8"
                >
                    Add to Cart
                </button>

                <div className="border-t border-gray-100 pt-8 space-y-4">
                    <div className="flex items-start gap-4">
                        <img src={assets.exchange_icon} className="w-5 opacity-60" alt="" /> {/* Assuming icon exists or use text */}
                        <div>
                            <p className="text-sm font-medium text-gray-900">Easy Returns</p>
                            <p className="text-xs text-gray-500 mt-1">Free 30-day returns on all orders.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <img src={assets.quality_icon} className="w-5 opacity-60" alt="" />
                        <div>
                            <p className="text-sm font-medium text-gray-900">Premium Quality</p>
                            <p className="text-xs text-gray-500 mt-1">Crafted with the finest materials.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container-custom py-32 border-t border-gray-100 mt-20">
         <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;