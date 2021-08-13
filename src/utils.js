/* eslint-disable no-restricted-globals */
import { parse } from 'yaml';

export async function getApps() {
    const res = await fetch('/vr-apps-catalog/apps.yml'), text = await res.text();
    return parse(text).apps;
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