import React from "react";
import TextInputField from "../../components/text-input-fields/TextInputField";
import { Button } from "@mui/material";
import { useFormValidation } from "../../hooks/useFormValidation";

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

const Login: React.FC = () => {
  const { values, errors, handleChange, validateForm } =
    useFormValidation<FormFields>(
      {
        email: "",
        password: "",
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
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <TextInputField
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        autoComplete="email"
      />
      <TextInputField
        name="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
        showTogglePassword
        type="password"
        autoComplete="current-password"
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
