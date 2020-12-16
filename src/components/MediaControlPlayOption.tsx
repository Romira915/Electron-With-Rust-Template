import React, { useMemo, useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { StyleIconButton, StyleMediaControl } from '../styles/style';
import { Repeat, Shuffle } from '@material-ui/icons';
import RepeatButton from './RepeatButton';
import ShuffleButton from './ShuffleButton';

const MediaControlPlayOption: React.FC = () => {
    return (
        <StyleMediaControl>
            <RepeatButton />
            <ShuffleButton />
        </StyleMediaControl>
    );
};

export default MediaControlPlayOption;
