import React, { useMemo, useCallback } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import PauseButton from './StopButton';
import PlayButton from './PlayButton';
import SkipNextButton from './SkipNextButton';
import SkipPreviousButton from './SkipPreviousButton';
import { StyleIconButton, StyleMediaControl } from '../styles/style';

const MediaControlButton: React.FC = () => {
    return (
        <StyleMediaControl>
            <PlayButton />
            <PauseButton />
            <SkipPreviousButton />
            <SkipNextButton />
        </StyleMediaControl>
    );
};

export default MediaControlButton;
