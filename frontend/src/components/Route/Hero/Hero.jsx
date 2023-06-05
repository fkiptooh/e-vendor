import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className={`${styles.section} w-[90%] md:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] md:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          {" "}
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-400 text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet harum
          blanditiis ab possimus voluptas deleniti velit minus dolore quisquam,
          obcaecati saepe. Expedita modi doloribus quas ullam impedit. Non,
          doloribus aliquid?
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
