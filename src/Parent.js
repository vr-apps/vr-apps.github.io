import React, { useState } from 'react';
import { CircularProgress, Box } from '@material-ui/core';

import { respawnFrame, useMessageHandler } from './SecuritySandbox';

export function Parent() {
  const [preloaderVisible, setPreloaderVisible] = useState(false);

  useMessageHandler(({ load, unload }) => {
    if (load) {
      setPreloaderVisible(true);
    }

    if (unload) {
      respawnFrame();
      setPreloaderVisible(false);
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
