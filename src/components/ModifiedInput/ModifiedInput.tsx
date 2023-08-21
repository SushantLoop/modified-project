import React, { ChangeEventHandler } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface ModifiedInputProps{
  placeholder?: string;
  size?: "small" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ModifiedInput: React.FC<ModifiedInputProps> = ({ placeholder="Text", size="small", onChange }) => {
  return (
    <Form.Control 
      type="text" 
      placeholder={placeholder}  
      size={size == "small" ? "sm" : "lg"}
      onChange={onChange}
    />
  )
}

export default ModifiedInput;