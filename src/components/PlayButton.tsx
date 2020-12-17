import React, { useMemo, useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { StyleIconButton } from '../styles/style';

interface IProps {
    onClick?: () => void;
}

const PlayButton: React.FC<IProps> = props => {
    return (
        <StyleIconButton>
            <Tooltip title="Play">
                <IconButton>
                    <PlayCircleOutlineIcon fontSize={'large'} />
                </IconButton>
            </Tooltip>
        </StyleIconButton>
    );
};

export default PlayButton;
