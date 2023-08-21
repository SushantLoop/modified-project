import React, { MouseEventHandler } from 'react';
// import { Button } from 'antd';

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text="Button", primary=false, disabled=false, onClick }) => {
  const styles = {
    "background": primary ? "blue" : "white", 
    "color": primary ? "white" : "black",
  }

  return (
    <button 
      style={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;