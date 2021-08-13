import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { sendMessage } from './SecuritySandbox';
import { GameCard } from './GameCard';

import { getApps, runGame } from './utils';

export function Sandboxed() {
    const [apps, setApps] = useState(null);
    useEffect(() => { getApps().then(setApps); }, []);

    if (!apps) { return null; }

    return (<Grid container spacing={3} sx={{ margin: '0 auto' }}>{
        apps.map((app, i) => <Grid item><GameCard app={app} key={i} onPlay={async (js) => {
            sendMessage({ load: true });

            const { error } = await runGame(js);
            if (error) {
                alert(error);
            }

            sendMessage({ unload: true });
        }} /></Grid>)
    }</Grid>);
}
