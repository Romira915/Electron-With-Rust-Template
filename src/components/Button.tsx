import React, { useMemo, useCallback } from 'react';

interface IProps {
    label: string;
    type: 'submit' | 'reset' | 'button';
    value: string;
    onClick: () => void;
}

const Button: React.FC<IProps> = props => {
    const onButtonClick = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            // --(e)
            props.onClick();
        },
        [props.onClick],
    );

    return (
        <span>
            <button type={props.type} onClick={props.onClick}>
                {props.label}
            </button>
        </span>
    );
};

export default Button;
