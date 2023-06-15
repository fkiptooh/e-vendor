import React, { useEffect } from "react";
import LoginPage from "../components/Login/LoginPage.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;
