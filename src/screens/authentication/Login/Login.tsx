import React from "react";
import LoginForm from "../LoginForm";
import login_image from "../../../assets/login_image.png";
import "../loginStyles.scss";

const Login: React.FC = () => {
  return (
    <div className="login-screen-main-container">
      <div className="login-screen-header-container">
        <LoginForm />
      </div>
      <div className="login-screen-image-container">
        <img
          className="login-screen-image"
          src={login_image}
          alt="login_image"
        />
      </div>
    </div>
  );
};

export default Login;
