import React, { MouseEventHandler } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export interface ModifiedButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const ModifiedButton: React.FC<ModifiedButtonProps>;
export default ModifiedButton;
