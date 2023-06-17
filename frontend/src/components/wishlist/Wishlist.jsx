import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setWishlistOpen }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256gb ssd 8gb ram silver color",
      description: "Test data",
      price: 984,
    },
    {
      name: "Iphone 14 pro max 256gb ssd 8gb ram black color",
      description: "Test data",
      price: 645,
    },
    {
      name: "Iphone 14 pro max 256gb ssd 8gb ram orange color",
      description: "Test data",
      price: 456,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setWishlistOpen(false)}
            />
          </div>
          {/* item list */}
          <div className={`${styles.normalFlex} p-5`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]"> 3 Items</h5>
          </div>
          {/* cart single item */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <WishItem key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const WishItem = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3av-U1FsxG8ydJxeLLfhqAKWixgYNb76AcA&usqp=CAU"
          alt="phone"
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] text-[#d02222] font-Roboto">
            {totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer" title="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
