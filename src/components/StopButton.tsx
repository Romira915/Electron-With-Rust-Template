import React, { useMemo, useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';
import { StyleIconButton } from '../styles/style';

interface IProps {
    onClick?: () => void;
}

const StopButton: React.FC<IProps> = props => {
    return (
        <Tooltip title="Stop">
            <StyleIconButton>
                <IconButton onClick={props.onClick}>
                    <StopIcon />
                </IconButton>
            </StyleIconButton>
        </Tooltip>
    );
};

export default StopButton;
