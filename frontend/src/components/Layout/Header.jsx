import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDropdown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setCartOpen] = useState(false);
  const [openWishlist, setWishlistOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);

  // console.log(user);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });

    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden md:h-[50px] md:my-[20px] md:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search the product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-");

                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h>{i.name}</h>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link to={`/seller`}>
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden md:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* category */}
          <div
            onClick={() => setDropDown(!dropDown)}
            className="relative h-[60px] mt-[10px] w-[270px] hidden lg:block"
          >
            <BiMenuAltLeft size={30} className="absolute mt-3 ml-2" />
            <button
              className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-[500] select-none rounded-t-md`}
            >
              All Categories
            </button>
            <IoIosArrowDropdown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          {/* Navbar items */}
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setWishlistOpen(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 /83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-o text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setCartOpen(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 /83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-o text-white font-mono text-[12px] leading-tight text-center">
                  1
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      alt="user_avatar"
                      className="h-[35px] w-[35px] rounded-full"
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 /83%)" />
                  </Link>
                )}
              </div>
            </div>
            {/* cart pop-up */}
            {openCart ? <Cart setCartOpen={setCartOpen} /> : null}
            {/* wishlist pop-up */}
            {openWishlist ? (
              <Wishlist setWishlistOpen={setWishlistOpen} />
            ) : null}
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="w-full h-[60px] fixed bg-[#fff] z-50 top-0 left-0 shadow-sm md:hidden">
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div className="relative mr-[20px]">
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-o text-white font-mono text-[12px] leading-tight text-center">
                1
              </span>
            </div>
          </div>
        </div>
        {/* header sidebar */}
        {open && (
          <div className="fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0">
            <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-o text-white font-mono text-[12px] leading-tight text-center">
                      0
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="mt-5 ml-4"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`} onClick={()=> setOpen(false)}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
