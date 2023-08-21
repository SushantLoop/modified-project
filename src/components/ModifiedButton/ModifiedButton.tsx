import React, { MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      variant={primary ? "primary" : "secondary"}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default ModifiedButton;