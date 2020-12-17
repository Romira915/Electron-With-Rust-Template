import React, { useMemo, useCallback } from 'react';
import {
    Box,
    Container,
    Grid,
    Paper,
    Slider,
    Typography,
} from '@material-ui/core';
import MediaControlButton from './MediaControlButton';
import MediaControlProgressBar from './MediaControlProgressBar';
import MediaControlVolume from './MediaControlVolume';
import MediaControlPlayOption from './MediaControlPlayOption';

const MediaControlPanel: React.FC = () => {
    return (
        <Paper>
            <Grid
                container
                justify={'space-between'}
                alignItems={'center'}
                spacing={0}>
                <Grid item xs={'auto'}>
                    <MediaControlButton />
                </Grid>
                <Grid item xs={6}>
                    <MediaControlProgressBar />
                </Grid>
                <Grid item xs={2}>
                    <MediaControlVolume />
                </Grid>
                <Grid item xs={'auto'}>
                    <MediaControlPlayOption />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default MediaControlPanel;
