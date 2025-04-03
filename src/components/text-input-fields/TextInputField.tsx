import React from 'react';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
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
}) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            fullWidth={fullWidth}
            error={error}
            helperText={helperText}
            variant="outlined"
        />
    );
};

export default TextInputField;