/* eslint-disable no-restricted-globals */
import React, { useLayoutEffect } from 'react';
import { Grid } from '@material-ui/core';

import { sendMessage } from './SecuritySandbox';
import { GameCard } from './GameCard';

export function GameCards({ apps, onPlay }) {
    useLayoutEffect(() => {
        sendMessage({ getScrollTo: true });
    }, []);

    return (<Grid container justifyContent="center">{
        apps.map((app, i) => <Grid item key={i}><GameCard app={app} onPlay={onPlay} /></Grid>)
    }</Grid>);
}
