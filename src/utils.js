/* eslint-disable no-restricted-globals */
import { parse } from 'yaml';

export async function getApps() {
    if (process.env.NODE_ENV === 'development') {
        const res = await fetch('https://vr-apps.github.io/vr-apps-catalog/apps.yml'), text = await res.text();
        return parse(text).apps.map(item => {
            item.js = 'https://vr-apps.github.io' + item.js;
            item.thumbnail = 'https://vr-apps.github.io' + item.thumbnail;
            return item;
        });
    }

    const res = await fetch('/vr-apps-catalog/apps.yml'), text = await res.text();
    return parse(text).apps;
}

export function processApps(apps) {
    return apps.filter(
        location.hash === '#dev' ?
            (({ main, dev }) => main || dev) :
            (({ main }) => main)
    ).sort((a, b) => a.rating > b.rating ? -1 : 1);
}

export async function runGame(js) {
    if (!window.isSecureContext) {
        return { error: 'need https' };
    }

    if (!navigator.xr) {
        return { error: 'WebXR not supported' };
    }

    const isSessionSupported = await navigator.xr.isSessionSupported('immersive-vr');

    if (!isSessionSupported) {
        return { error: 'VR in WebXR not supported' };
    }

    const session = await navigator.xr.requestSession('immersive-vr', {
        optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers']
    });

    const jsModule = await import(/* webpackIgnore: true */js);

    await jsModule.default.renderer.xr.setSession(session);

    await new Promise(res => { session.addEventListener('end', res) });

    return { ok: true };
}