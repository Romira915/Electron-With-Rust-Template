import React, { useMemo, useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { StyleIconButton } from '../styles/style';

interface IProps {
    onClick?: () => void;
}

const SkipNextButton: React.FC<IProps> = props => {
    return (
        <StyleIconButton>
            <Tooltip title="Next">
                <IconButton onClick={props.onClick}>
                    <SkipNextIcon />
                </IconButton>
            </Tooltip>
        </StyleIconButton>
    );
};

export default SkipNextButton;
