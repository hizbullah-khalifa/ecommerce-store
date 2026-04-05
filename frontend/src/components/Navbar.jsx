import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    navigate('/login');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${scrolled
          ? 'bg-white shadow-sm py-4'
          : 'bg-white py-6 sm:bg-white/90 sm:backdrop-blur-sm'
        }`}
    >
      <div className="container-custom flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-serif tracking-wider uppercase font-medium">
            Sauda
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-sm font-medium tracking-wide text-gray-600">
          <NavLink to="/" className="hover:text-black transition-colors uppercase text-xs">Home</NavLink>
          <NavLink to="/collection" className="hover:text-black transition-colors uppercase text-xs">Collection</NavLink>
          <NavLink to="/about" className="hover:text-black transition-colors uppercase text-xs">About</NavLink>
          <NavLink to="/contact" className="hover:text-black transition-colors uppercase text-xs">Contact</NavLink>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {!location.pathname.includes('about') && !location.pathname.includes('contact') && (
            <img onClick={() => {
              if (location.pathname.includes('collection')) {
                setShowSearch(!showSearch);
              } else {
                navigate('/collection');
                setShowSearch(true);
              }
            }} src={assets.search_icon} className="w-5 cursor-pointer hover:opacity-70 transition-opacity" alt="Search" />
          )}

          <div className="group relative">
            <img
              onClick={() => token ? null : navigate('/login')}
              src={assets.profile_icon}
              className="w-5 cursor-pointer hover:opacity-70 transition-opacity"
              alt="Profile"
            />
            {/* Dropdown Menu */}
            {token &&
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-600 rounded shadow-lg border border-gray-100">
                  <p className="cursor-pointer hover:text-black text-xs uppercase">My Profile</p>
                  <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black text-xs uppercase">Orders</p>
                  <p onClick={logout} className="cursor-pointer hover:text-black text-xs uppercase">Logout</p>
                </div>
              </div>
            }
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 hover:opacity-70 transition-opacity" alt="Cart" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
              {getCartCount()}
            </span>
          </Link>

          <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden hover:opacity-70" alt="Menu" />
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 ${visible ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full p-6">
            <div onClick={() => setVisible(false)} className="self-end cursor-pointer p-2 mb-8">
              <img className="w-6" src={assets.cross_icon} alt="Close" />
            </div>

            <div className="flex flex-col gap-6 text-xl font-serif text-center">
              <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-2 border-b ${isActive ? 'text-black border-black font-medium' : 'text-gray-500 border-gray-100'}`} to="/">Home</NavLink>
              <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-2 border-b ${isActive ? 'text-black border-black font-medium' : 'text-gray-500 border-gray-100'}`} to="/collection">Collection</NavLink>
              <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-2 border-b ${isActive ? 'text-black border-black font-medium' : 'text-gray-500 border-gray-100'}`} to="/about">About</NavLink>
              <NavLink onClick={() => setVisible(false)} className={({ isActive }) => `py-2 border-b ${isActive ? 'text-black border-black font-medium' : 'text-gray-500 border-gray-100'}`} to="/contact">Contact</NavLink>

              {/* Mobile Logout Option - Added for better UX */}
              {token && (
                <div className="mt-8 flex flex-col gap-4">
                  <p onClick={() => { navigate('/orders'); setVisible(false); }} className="text-gray-500 hover:text-black cursor-pointer">Orders</p>
                  <p onClick={() => { logout(); setVisible(false); }} className="text-gray-500 hover:text-black cursor-pointer">Logout</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
