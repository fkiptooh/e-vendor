import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 ${active ? "unset" : "mb-12"}`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>IPhone 14pro Max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          adipisci, reiciendis eaque fuga ex tenetur architecto sit atque nisi
          tempora eos, necessitatibus earum velit consequatur? Inventore aliquid
          repudiandae minus harum!
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] pr-3 text-rose-500 line-through">
              {" "}
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-blue-900 font-Roboto">
              99$
            </h5>
          </div>
          <span className="text-[17px] pr-3 text-green-600 font-[400]">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
