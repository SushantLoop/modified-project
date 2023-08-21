import React from 'react';

interface ModifiedButtonProps {
    text: string;
    primary: boolean;
    disabled: boolean;
}
declare const ModifiedButton: React.FC<ModifiedButtonProps>;

interface ModifiedInputProps {
    placeholder: string;
    size: "small" | "large";
}
declare const ModifiedInput: React.FC<ModifiedInputProps>;

export { ModifiedButton, ModifiedInput };
