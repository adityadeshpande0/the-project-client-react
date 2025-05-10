import React from "react";
import login_image from "../../../assets/login_image.png";
import "../registerStyles.scss"
import RegisterForm from "../RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="register-screen-main-container">
      <div className="register-screen-header-container">
        <RegisterForm />
      </div>
      <div className="register-screen-image-container">
        <img
          className="register-screen-image"
          src={login_image}
          alt="login_image"
        />
      </div>
    </div>
  );
};

export default Register;
