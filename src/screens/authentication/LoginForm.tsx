import React, { useEffect } from "react";
import TextInputField from "../../components/text-input-fields/TextInputField";
import { Alert, Button, Checkbox, Typography } from "@mui/material";
import { useFormValidation } from "../../hooks/useFormValidation";
import app_icon from "..//..//assets/app_icon.svg";
import CheckIcon from "@mui/icons-material/Check";
import "./loginStyles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSigninUserMutation } from "./data-call/authApiCall";
import { useDispatch } from "react-redux";
import { setAuthToken } from "./authSlice";

type FormFields = {
  email: string;
  password: string;
};

const validationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    required: true,
    minLength: 8,
  },
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signin, { isSuccess, data, isLoading, isError }] =
    useSigninUserMutation();
  const { values, errors, handleChange, validateForm } =
    useFormValidation<FormFields>(
      {
        email: "",
        password: "",
      },
      validationRules
    );

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data.token);
      dispatch(setAuthToken(data.token));
      navigate("/user-profile");
    }
  }, [isSuccess, data]);

  const handleSubmit = () => {
    if (validateForm()) {
      // Call your login API here
      signin({
        emailOrUsername: values.email,
        password: values.password,
      }).unwrap();
    }
  };
  return (
    <div className="login-form-main-container">
      <div className="login-header">
        <img
          className="login-form-app-icon"
          src={app_icon}
          alt="application icon"
        />
        <Typography>Career Insta</Typography>
      </div>
      <div className="login-title">
        <Typography variant="h4">Sign in</Typography>
        <Typography
          className="login-form-secondary-text"
          variant="body1"
          color="textSecondary"
          gutterBottom
        >
          Please login to continue to your account.
        </Typography>
      </div>
      {(isLoading || isSuccess || isError) && (
        <Alert
          severity={
            isLoading
              ? "info"
              : isSuccess
              ? "success"
              : isError
              ? "error"
              : "info"
          }
          icon={isSuccess ? <CheckIcon fontSize="inherit" /> : undefined}
        >
          {isLoading && "Signing in, please wait..."}
          {isSuccess && (data?.message || "Login successful!")}
          {isError && (data?.error.message || "Login failed!")}
        </Alert>
      )}
      <TextInputField
        name="email"
        label="Email"
        size="small"
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        autoComplete="email"
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
      <div className="login-remember-me">
        <Checkbox name="rememberMe" color="primary" sx={{ padding: 0 }} />
        <Typography variant="body2" color="textSecondary">
          Keep me logged in
        </Typography>
      </div>
      <Button
        variant="contained"
        size="small"
        fullWidth
        className="login-button"
        onClick={handleSubmit}
        disabled={
          isLoading ||
          !!errors.email ||
          !!errors.password ||
          !values.email ||
          !values.password
        }
      >
        Sign in
      </Button>
      <div className="login-footer">
        {/* <div className="login-divider">
          <hr className="divider-line" />
          <Typography variant="body2" color="textSecondary">
            OR
          </Typography>
          <hr className="divider-line" />
        </div> */}
        {/* <div className="login-google">Sign in with google</div> */}
        <div className="login-create-account">
          <Typography variant="body2" color="textSecondary">
            Need an account?{" "}
            <Link className="login-form-link" to="/signup">
              Create one
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
