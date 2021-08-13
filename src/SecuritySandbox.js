/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';

export function SecuritySandbox({ Parent, Sandboxed }) {
    useEffect(() => {
        if (window.parent === window) {
            respawnFrame();
        }
    }, []);

    const Component = window.parent === window ? Parent : Sandboxed;

    return <Component />;
}

export function respawnFrame() {
    document.querySelector('#security-sandbox-iframe')?.remove();

    const iframe = document.createElement('iframe');

    iframe.id = 'security-sandbox-iframe';
    iframe.allow = 'xr-spatial-tracking';
    iframe.sandbox = 'allow-same-origin allow-scripts allow-modals'
    iframe.src = window.location.href;

    document.body.prepend(iframe);

    return iframe;
}

export function useMessageHandler(handler) {
    useEffect(() => {
        function handleMessage({ origin, data }) {
            if (origin === window.location.origin) {
                handler(data);
            }
        }

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [handler]);
}

export function sendMessage(message) {
    const target = window.parent === window ? document.querySelector('#security-sandbox-iframe') : window.parent;

    target.postMessage(message, window.location.origin);
}
