import React, { ChangeEventHandler } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export interface ModifiedInputProps {
    placeholder?: string;
    size?: "small" | "large";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const ModifiedInput: React.FC<ModifiedInputProps>;
export default ModifiedInput;
