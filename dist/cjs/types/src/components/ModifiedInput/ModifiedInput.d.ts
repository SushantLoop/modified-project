import React from 'react';
export interface ModifiedInputProps {
    placeholder: string;
    size: "small" | "large";
}
declare const ModifiedInput: React.FC<ModifiedInputProps>;
export default ModifiedInput;
