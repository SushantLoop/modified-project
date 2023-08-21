import React, { MouseEventHandler } from 'react';
export interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
