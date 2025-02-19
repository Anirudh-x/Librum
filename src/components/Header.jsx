import React, { useContext, useState } from "react";
import { BooksContext, ThemeContext } from "../context";
import { IoBookOutline } from "react-icons/io5";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import CartDetails from "../pages/books/CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(BooksContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  return (
    <header>
      {
        showCart && <CartDetails onClose={() => setShowCart(false)}/>
      }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/" className="flex gap-2 items-center">
          <IoBookOutline className="w-8 h-8" />
          <span className="font-bold uppercase">Librum Book Store</span>
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              href="#"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <FaRegBell />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              {darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
            </a>
          </li>

          <li>
            <a
              onClick={handleCartShow}
              href="#"
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <MdOutlineShoppingCart />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
