/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';

import { sendMessage, useMessageHandler } from './SecuritySandbox';
import { GameCards } from './GameCards';

import { getApps, processApps, runGame } from './utils';

export function Sandboxed() {
    const [apps, setApps] = useState(null);
    useEffect(() => { getApps().then(processApps).then(setApps); }, []);

    useMessageHandler(({ setScrollTo }) => {
        if (setScrollTo) {
            window.scrollTo(setScrollTo.x, setScrollTo.y);
        }
    });

    if (!apps) { return null; }

    return <GameCards apps={apps} onPlay={async (js) => {
        sendMessage({
            load: true,
            setScrollTo: { x: window.scrollX, y: window.scrollY }
        });

        const { error } = await runGame(js);
        if (error) {
            alert(error);
        }

        sendMessage({ unload: true });
    }} />;
}
