const path = require("path");
const electron = require("electron");
const { BrowserWindow } = electron; // https://electronjs.org/docs/api/browser-window

exports.createBrowserWindow = () => {
    // https://electronjs.org/docs/api/browser-window#class-browserwindow
    return new BrowserWindow({
        width: 1365,
        height: 729,
        // titleBarStyle: "hidden",
        // frame: false,
        autoHideMenuBar: true,
        backgroundColor: "#FFF",
        webPreferences: {
            webviewTag: true,
            devTools: false,
            defaultEncoding: "UTF-8",
        },
        title: "Учебники"
    });
};