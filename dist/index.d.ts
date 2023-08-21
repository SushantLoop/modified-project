import React, { MouseEventHandler, ChangeEventHandler } from 'react';

interface ModifiedButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const ModifiedButton: React.FC<ModifiedButtonProps>;

interface ModifiedInputProps {
    placeholder?: string;
    size?: "small" | "large";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const ModifiedInput: React.FC<ModifiedInputProps>;

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps {
    placeholder?: string;
    size?: "small" | "large";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.FC<InputProps>;

export { Button, Input, ModifiedButton, ModifiedInput };
