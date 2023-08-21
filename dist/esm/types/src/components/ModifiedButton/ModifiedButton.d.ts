import React from 'react';
export interface ModifiedButtonProps {
    text: string;
    primary: boolean;
    disabled: boolean;
}
declare const ModifiedButton: React.FC<ModifiedButtonProps>;
export default ModifiedButton;
