import React, { useEffect } from "react";
import SignUpPage from "../components/SignUp/SignUpPage.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return <SignUpPage />;
};

export default SignUp;
