import { fade, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const StyleIconButton = styled.span`
    ${(props: { theme: Theme }) => css`
        margin-left: -1em;
        padding-left: 0px;
        font-size: 1em;
        min-width: 2em;
    `}
`;

export const StyleMediaControl = styled.span`
    ${(props: { theme: Theme }) => css`
        min-width: 10em;
        padding-left: 0.5em;
    `}
`;
