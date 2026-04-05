import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ProductItem = ({ id, image, name, price, sizes, bestseller }) => {
  const { currency } = useContext(ShopContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
  };

  return (
    <Link to={`/product/${id}`} className="group block cursor-pointer relative">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {bestseller && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-green-800 bg-green-50 px-2 py-1 rounded-sm">
                Exclusive
            </span>
        )}
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-sm">
            New In
        </span>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-4 rounded-lg">
        <img
          src={image[currentImageIndex]}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
        
        {/* Carousel Arrows */}
        {image.length > 1 && (
            <>
                <button 
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-green-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button 
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-green-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </>
        )}

        {/* Pagination Dots */}
        {image.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {image.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-black' : 'bg-white/60'}`}
                    />
                ))}
            </div>
        )}
      </div>
      
      {/* Content Below */}
      <div className="text-center">
        {/* Sizes */}
        {sizes && sizes.length > 0 && (
            <div className="flex justify-center gap-2 mb-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                {sizes.slice(0, 5).map((size, index) => (
                    <span key={index}>{size}</span>
                ))}
                {sizes.length > 5 && <span>+</span>}
            </div>
        )}

        <h3 className="text-sm font-serif text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
          {name}
        </h3>
        {/* ✅ CHANGED: currency from context replaced with hardcoded PKR */}
        <p className="text-sm font-medium text-green-800">
          PKR {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;