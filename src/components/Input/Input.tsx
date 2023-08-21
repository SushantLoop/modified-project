import React, { ChangeEventHandler } from 'react';

export interface InputProps{
  placeholder?: string;
  size?: "small" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ placeholder="Text", size="small", onChange }) => {
  const styles = {
    "padding": size == "large" ? "10px" : "5px"
  }

  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      style={styles} 
      onChange={onChange} 
    />
  )
}

export default Input;