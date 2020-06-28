const { app, BrowserWindow } = require('electron');
const { getIndexPath, getWindowBounds } = require('./utils');

const winWidth = 1200;
const winHeight = 780;

function getWindowOptions() {
    return {
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        show: false
    };
}

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        ...getWindowBounds(winWidth, winHeight, true),
        ...getWindowOptions()
    });
    mainWindow.loadURL(getIndexPath());

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
