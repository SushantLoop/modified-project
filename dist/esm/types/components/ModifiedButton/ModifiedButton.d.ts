import React, { MouseEventHandler } from 'react';
export interface ModifiedButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const ModifiedButton: React.FC<ModifiedButtonProps>;
export default ModifiedButton;
