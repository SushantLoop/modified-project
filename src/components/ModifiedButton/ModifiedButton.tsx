import React, { MouseEventHandler } from 'react';
import { Button } from 'antd';

export interface ModifiedButtonProps{
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ModifiedButton: React.FC<ModifiedButtonProps> = ({ text="Button", primary=false, disabled=false, onClick }) => {

  return (
    <Button 
      onClick={onClick} 
      type={primary ? "primary" : "default"}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default ModifiedButton;