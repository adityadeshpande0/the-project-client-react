import React from "react";
import TextInputField from "../../components/text-input-fields/TextInputField";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useFormValidation } from "../../hooks/useFormValidation";
import app_icon from "..//..//assets/app_icon.svg";
import "./registerStyles.scss";
import { Link } from "react-router-dom";
import { useSendotpServiceMutation } from "./data-call/authApiCall";

type FormFields = {
  fullName: string;
  userName: string;
  oneTimePassword: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const validationRules = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  userName: {
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  oneTimePassword: {
    required: true,
    minLength: 6,
    maxLength: 6,
    pattern: /^[0-9]+$/,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    required: true,
    minLength: 8,
  },
  confirmPassword: {
    required: true,
    matches: "password",
  },
};

const RegisterForm: React.FC = () => {
  const [sendotp, { isLoading, isError }] = useSendotpServiceMutation();
  console.log(isLoading)
  const { values, errors, handleChange, validateForm } =
    useFormValidation<FormFields>(
      {
        fullName: "",
        userName: "",
        oneTimePassword: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationRules
    );

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Register successful:", values);
      // Call your login API here
    } else {
      console.log("Validation errors:", errors);
    }
  };

  const handleSendOtp = async () => {
    try {
      const response = await sendotp({ email: values.email }).unwrap();
      console.log("Send OTP to:", values.email, response);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div className="register-form-main-container">
      <div className="register-header">
        <img
          className="register-form-app-icon"
          src={app_icon}
          alt="application icon"
        />
        <Typography>Career Insta</Typography>
      </div>
      <div className="register-title">
        <Typography variant="h4">Sign up</Typography>
        <Typography
          className="register-form-secondary-text"
          variant="body1"
          color="textSecondary"
          gutterBottom
        >
          Sign up to build your career with us
        </Typography>
      </div>
      <TextInputField
        name="fullName"
        label="Full Name"
        size="small"
        value={values.fullName}
        onChange={handleChange}
        error={!!errors.fullName}
        helperText={errors.fullName}
        autoComplete="fullName"
      />
      <TextInputField
        name="userName"
        label="User Name"
        size="small"
        value={values.userName}
        onChange={handleChange}
        error={!!errors.userName}
        helperText={errors.userName}
        autoComplete="username"
      />
      <TextInputField
        name="email"
        label="Email"
        size="small"
        endAdornment={
          <Button
            onClick={handleSendOtp}
            style={{ textTransform: "capitalize" }}
            size="small"
            disabled={isLoading}
            aria-label="Send OTP"
          >
            {isLoading ? (
              "loading..."
            ) : (
              "Send OTP"
            )}
          </Button>
        }
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        autoComplete="email"
      />
      <TextInputField
        name="oneTimePassword"
        label="OTP"
        size="small"
        value={values.oneTimePassword}
        onChange={handleChange}
        error={!!errors.oneTimePassword}
        helperText={errors.oneTimePassword}
        autoComplete="oneTimePassword"
      />
      <TextInputField
        name="password"
        label="Password"
        size="small"
        value={values.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        showTogglePassword
        type="password"
        autoComplete="current-password"
      />
      <TextInputField
        name="confirmPassword"
        label="Confirm Password"
        size="small"
        value={values.confirmPassword}
        onChange={handleChange}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
        showTogglePassword={false}
        type="password"
        autoComplete="current-password"
      />
      <Button
        variant="contained"
        size="small"
        fullWidth
        className="register-button"
        onClick={handleSubmit}
      >
        Sign up
      </Button>
      <div className="register-footer">
        {/* <div className="login-divider">
          <hr className="divider-line" />
          <Typography variant="body2" color="textSecondary">
            OR
          </Typography>
          <hr className="divider-line" />
        </div> */}
        {/* <div className="login-google">Sign in with google</div> */}
        <div className="register-create-account">
          <Typography variant="body2" color="textSecondary">
            Already have an account?{" "}
            <Link className="register-form-link" to="/signin">
              Sign in
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
