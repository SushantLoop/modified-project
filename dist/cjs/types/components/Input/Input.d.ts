import React, { ChangeEventHandler } from 'react';
export interface InputProps {
    placeholder?: string;
    size?: "small" | "large";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.FC<InputProps>;
export default Input;
