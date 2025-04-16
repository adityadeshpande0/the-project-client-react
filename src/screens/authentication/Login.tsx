import React from "react";
import TextInputField from "../../components/text-input-fields/TextInputField";
import { Button, Checkbox, Link, Typography } from "@mui/material";
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
      <div>
        <Typography variant="h4">Sign in</Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Please login to continue to your account.
        </Typography>
      </div>
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
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Checkbox name="rememberMe" color="primary" sx={{ padding: 0 }} />
        <Typography variant="body2" color="textSecondary">
          Keep me logged in
        </Typography>
      </div>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Login
      </Button>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <hr style={{ flex: 1 }} />
          <Typography variant="body2" color="textSecondary">
            OR
          </Typography>
          <hr style={{ flex: 1 }} />
        </div>
        <div>Sign in with google</div>
        <div>
          <Typography>Need an account ? <Link>Create one</Link></Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
