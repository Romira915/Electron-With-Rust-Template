import React, { useMemo, useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { StyleIconButton } from '../styles/style';

interface IProps {
    onClick?: () => void;
}

const SkipPreviousButton: React.FC<IProps> = props => {
    return (
        <Tooltip title="Back">

        <StyleIconButton>
            <IconButton onClick={props.onClick}>
                <SkipPreviousIcon />
            </IconButton>
        </StyleIconButton>
        </Tooltip>
    );
};

export default SkipPreviousButton;
