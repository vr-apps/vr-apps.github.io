import React, { useState } from 'react';
import { CircularProgress, Box } from '@material-ui/core';

import { respawnFrame, useMessageHandler, sendMessage } from './SecuritySandbox';

export function Parent() {
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useMessageHandler(({ load, unload, setScrollTo, getScrollTo }) => {
    if (preloaderVisible) {
      if (unload) {
        respawnFrame();
        setPreloaderVisible(false);
      }
    } else {
      if (load) {
        setPreloaderVisible(true);
      }

      if (setScrollTo) {
        setPosition(setScrollTo);
      }
    }

    if (getScrollTo === true) {
      sendMessage({ setScrollTo: position });
    }
  });

  if (!preloaderVisible) {
    return null;
  }

  return <div className="Parent">
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} onClick={() => {
      respawnFrame();
      setPreloaderVisible(false);
    }}>
      <CircularProgress />
    </Box>
  </div>;
}
