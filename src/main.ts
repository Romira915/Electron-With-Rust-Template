import { app, BrowserWindow, ipcMain, dialog, Menu, session } from 'electron';
import path from 'path';
import os from 'os';

require('electron-reload')(path.join(process.cwd(), 'build'), {
    electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron.cmd'),
});

const native = require('../native');

// セキュアな Electron の構成
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436
let mainWindow: BrowserWindow | null = null;
const createWindow = (): void => {
    // レンダープロセスとなる、ウィンドウオブジェクトを作成する。
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // 読み込む index.html。
    // tsc でコンパイルするので、出力先の dist の相対パスで指定する。
    mainWindow.loadFile(__dirname + '/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // 開発者ツールを起動する
    mainWindow.webContents.openDevTools();
};

// Electronの起動準備が終わったら、ウィンドウを作成する。
app.whenReady().then(createWindow);

// すべての ウィンドウ が閉じたときの処理
app.on('window-all-closed', () => {
    // macOS 以外では、メインプロセスを停止する
    // macOS では、ウインドウが閉じてもメインプロセスは停止せず
    // ドックから再度ウインドウが表示されるようにする。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // macOS では、ウインドウが閉じてもメインプロセスは停止せず
    // ドックから再度ウインドウが表示されるようにする。
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on('hello', (event, arg) => {
    console.log(native.hello());
});
