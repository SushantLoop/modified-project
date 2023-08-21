import React, { ChangeEventHandler } from 'react';
import { Input } from 'antd';

export interface ModifiedInputProps{
  placeholder?: string;
  size?: "small" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ModifiedInput: React.FC<ModifiedInputProps> = ({ placeholder="Text", size="small", onChange }) => {
  return (
    <Input 
      type="text" 
      placeholder={placeholder}  
      size={size == "small" ? "small" : "large"}
      onChange={onChange}
    />
  )
}

export default ModifiedInput;