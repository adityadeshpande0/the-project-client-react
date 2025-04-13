import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { SxProps, Theme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface TextInputFieldProps {
    label: string;
    margin?: 'none' | 'dense' | 'normal';
    value: string;
    size?: 'small' | 'medium';
    variant?: 'outlined' | 'filled' | 'standard';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    maxRows?: number;
    required?: boolean;
    InputProps?: object;
    InputLabelProps?: object;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    showTogglePassword?: boolean;
    sx?: SxProps<Theme>;
    autoComplete?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
    label,
    value,
    onChange,
    placeholder = '',
    type = 'text',
    fullWidth = true,
    error = false,
    helperText = '',
    disabled = false,
    multiline = false,
    rows,
    maxRows,
    required = false,
    InputProps = {},
    InputLabelProps = {},
    startAdornment,
    endAdornment,
    showTogglePassword = false,
    sx,
    autoComplete,
    variant = 'outlined',
    size = 'medium',
    margin = 'normal',
}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);

    const getType = () => {
        if (showTogglePassword && type === 'password') {
            return showPassword ? 'text' : 'password';
        }
        return type;
    };

    const adornments = {
        startAdornment: startAdornment && (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: showTogglePassword ? (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        ) : endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : undefined,
    };

    return (
        <TextField
            label={label}
            margin={margin}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={getType()}
            fullWidth={fullWidth}
            error={error}
            helperText={helperText}
            disabled={disabled}
            multiline={multiline}
            rows={rows}
            maxRows={maxRows}
            required={required}
            variant={variant}
            size={size}
            InputProps={{ ...InputProps, ...adornments }}
            InputLabelProps={InputLabelProps}
            sx={sx}
            autoComplete={autoComplete}
        />
    );
};

export default TextInputField;
