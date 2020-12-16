import React, { useMemo, useCallback } from 'react';
import {
    Box,
    Container,
    Grid,
    IconButton,
    Slider,
    Tooltip,
    Typography,
} from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import RepeatIcon from '@material-ui/icons/Repeat';
import { StyleIconButton } from '../styles/style';

const MediaControlVolume: React.FC = () => {
    return (
        <Grid container justify={'center'} alignItems={'flex-start'} spacing={1}>
            <Grid item xs={'auto'}>
                <StyleIconButton>
                    <Tooltip title="Mute">
                        <IconButton size={'small'}>
                            <VolumeUpIcon fontSize={'small'} />
                        </IconButton>
                    </Tooltip>
                </StyleIconButton>
            </Grid>
            <Grid item xs={10}>
                <Slider
                    defaultValue={50}
                    aria-label={'MusicVolume'}
                    aria-labelledby="MusicVolume"
                    step={0.1}
                    min={0}
                    max={100}
                />
            </Grid>
        </Grid>
    );
};

export default MediaControlVolume;
