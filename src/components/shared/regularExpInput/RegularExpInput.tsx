import { TextField } from "@mui/material";
import React, { FC } from "react";

interface RegularExpInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  className?: string;
}

const RegularExpInput: FC<RegularExpInputProps> = ({ label, placeholder, onChange, value, className = "" }) => {
  //TODO: валидация regExp
  return (
    <TextField
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value)}
      className={className}
      placeholder={placeholder}
      label={label}
      variant="outlined"
    />
  );
};

export default RegularExpInput;
