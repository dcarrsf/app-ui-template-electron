const { screen } = require('electron');
const path = require('path');
const url = require('url');

function isDev() {
    if (
        process.defaultApp ||
        /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
        /[\\/]electron[\\/]/.test(process.execPath)
    ) {
        return true;
    }
    return false;
}

function getIndexPath() {
    if (isDev() && process.argv.indexOf('--noDevServer') === -1) {
        return url.format({
            protocol: 'http:',
            host: 'localhost:8888',
            pathname: 'index.html',
            slashes: true
        });
    }
    return url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, 'build', 'index.html'),
        slashes: true
    });
}

function getDisplayRect(floatLeft) {
    const displays = screen.getAllDisplays();
    let displayRect = displays[0];
    if (floatLeft) {
        for (const i in displays) {
            if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
                displayRect = displays[i];
                break;
            }
        }
    }
    return displayRect;
}

function getWindowBounds(w, h, floatLeft) {
    const { bounds } = getDisplayRect(floatLeft);
    return {
        x: bounds.x + (bounds.width - w) / 2,
        x: bounds.y + (bounds.height - h) / 2 - 50,
        width: w,
        height: h
    };
}

module.exports = {
    isDev,
    getIndexPath,
    getDisplayRect,
    getWindowBounds
};
