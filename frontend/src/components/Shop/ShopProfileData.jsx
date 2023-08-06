import React, { useState, useEffect } from "react";
import ProductCard from "../Route/ProductCard/ProductCard";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsShop } from "../../redux/action/product";

const ShopProfileData = ({ isOwner }) => {
  const [active, setActive] = useState(1);
  // call states for varous usecases : seller/ shop products specific for the creating seller.
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const { events } = useSelector((state) => state.events);
  // const { seller } = useSelector((state) => state.seller);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch, id]);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 1 ? " text-rose-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 2 ? " text-rose-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              {" "}
              Running Events
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 3 ? " text-rose-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              {" "}
              Shop Reviews
            </h5>
          </div>
        </div>
        {isOwner && (
          <div>
            <Link to={`/dashboard`}>
              <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                <span className="text-white">Go to Dashboard</span>
              </div>
            </Link>
          </div>
        )}
      </div>
      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
          {products &&
            products.map((i, index) => (
              <ProductCard data={i} key={index} isShop={true} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ShopProfileData;
