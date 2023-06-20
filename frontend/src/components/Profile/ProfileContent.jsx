import React, { useState } from "react";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipcode] = useState()
  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                alt="user_avatar"
                className="h-[150px] w-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
              />
              <div className="w-[30px] h-[30px] bg-[#e3e9ee] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label htmlFor="" className="block pb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="block pb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
                
              </div>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label htmlFor="" className="block pb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={phoneNumber}
                    onChange={(e)=> setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label htmlFor="" className="block pb-2">
                    Address
                  </label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={zipCode}
                    onChange={(e)=> setZipcode(e.target.value)}
                  />
                </div>
                
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileContent;
