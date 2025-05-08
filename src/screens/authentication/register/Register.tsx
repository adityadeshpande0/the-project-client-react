import React from "react";
import RegisterForm from "../RegisterForm";
import signUp_image from "..//..//..//assets/login_image.png";
import '..//registerStyles.scss'
const Register: React.FC = () => {
  return (
    <div className="register-screen-main-container">
      <div className="register-screen-form-container">
        <RegisterForm />
      </div>
      <div className="register-screen-image-container">
        <img
          className="register-screen-image"
          src={signUp_image}
          alt="signup image"
        />
      </div>
    </div>
  );
};

export default Register;
