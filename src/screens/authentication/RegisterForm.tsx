import { Button, Typography } from "@mui/material";
import React from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import TextInputField from "../../components/text-input-fields/TextInputField";
type FormFields = {
  fullName: string;
  userName: string;
  email: string;
  oneTimePassword: string;
  password: string;
  confirmPassword: string;
};
const validationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  fullName: {
    required: true,
    minLength: 3,
  },
  userName: {
    required: true,
    minLength: 3,
  },
  oneTimePassword: {
    required: true,
    pattern: /^[0-9]{6}$/,
  },
  password: {
    required: true,
    minLength: 8,
  },
  confirmPassword: {
    required: true,
    minLength: 8,
  },
};
const RegisterForm: React.FC = () => {
  const { values, errors, handleChange, validateForm } =
    useFormValidation<FormFields>(
      {
        email: "",
        password: "",
        fullName: "",
        userName: "",
        oneTimePassword: "",
        confirmPassword: "",
      },
      validationRules
    );
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Login successful:", values);
      // Call your login API here
    } else {
      console.log("Validation errors:", errors);
    }
  };
  return (
    <div className="register-form-main-container">
      <div>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sign up to build your career with us.
        </Typography>
        <div>
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
            autoComplete="userName"
          />
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
            autoComplete="password"
          />
          <TextInputField
            name="confirmPassword"
            label="Confirm Password"
            size="small"
            value={values.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            autoComplete="confirmPassword"
          />
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            fullWidth
            className="login-button"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
