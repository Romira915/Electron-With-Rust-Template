import React, { useMemo, useCallback } from 'react';
import { Box, Container, Grid, Slider, Typography } from '@material-ui/core';

const MediaControlProgressBar: React.FC = () => {
    return (
        <span>
            <Grid container justify={'space-between'}>
                <Grid item>
                    <Typography id="MusicProgress">Title</Typography>
                </Grid>
                <Grid item>
                    <Typography id="MusicProgress">now / Lenght</Typography>
                </Grid>
            </Grid>
            <Slider
                defaultValue={0}
                aria-label={'MusicProgress'}
                aria-labelledby="MusicProgress"
                step={0.1}
            />
        </span>
    );
};

export default MediaControlProgressBar;
