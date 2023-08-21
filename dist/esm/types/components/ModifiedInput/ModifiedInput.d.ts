import React, { ChangeEventHandler } from 'react';
export interface ModifiedInputProps {
    placeholder?: string;
    size?: "small" | "large";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const ModifiedInput: React.FC<ModifiedInputProps>;
export default ModifiedInput;
