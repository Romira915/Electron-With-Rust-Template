import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Paper,
    Typography,
    makeStyles,
    Theme,
    Button,
    Slider,
    IconButton,
    Box,
    Container,
    Grid,
    CssBaseline,
    ButtonGroup,
    Checkbox,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Store from './Store';
import UserForm from './components/UserForm';
import PlayButton from './components/PlayButton';
import api from './api/api';
import ISettings from './states/ISettings';
import { IState } from './states/IState';
import { changeSettingsAction } from './actions/SettingsActions';
import DarkTheme from './theme/DarkTheme';
import LightTheme from './theme/LightTheme';
import MediaControlPanel from './components/MediaControl';

const container = document.getElementById('root');

const show = () => {
    window.api.hello();
    console.log('Button Click');
};

const Root: React.FC = props => {
    const { theme } = useSelector<IState, ISettings>(a => a.settings);
    const dispatch = useDispatch();

    const onThemeChange = useCallback(() => {
        dispatch(
            changeSettingsAction({
                theme: theme === LightTheme ? DarkTheme : LightTheme,
            }),
        );
    }, [theme]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Button onClick={onThemeChange}>ダークモード</Button>
                {props.children}
            </CssBaseline>
        </ThemeProvider>
    );
};

ReactDOM.render(
    <Provider store={Store}>
        <Root>
            <MediaControlPanel></MediaControlPanel>
        </Root>
    </Provider>,
    container,
);
