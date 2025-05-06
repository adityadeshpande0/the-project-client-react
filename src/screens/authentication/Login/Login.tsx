import React from "react";
import LoginForm from "../LoginForm";
import login_image from "../../../assets/login_image.png";
import "./loginStyles.scss";

const Login: React.FC = () => {
  return (
    <div className="login-screen-main-container">
      <LoginForm />
      <div className="login-screen-image-container">
        <img
          style={{ width: "100%", objectFit: "fill", height: "100%" }}
          src={login_image}
          alt="login_image"
        />
      </div>
    </div>
  );
};

export default Login;
