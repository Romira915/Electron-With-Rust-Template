import { BrowserWindow, app, dialog, ipcMain, ipcRenderer } from 'electron';
import IAPI from './IAPI';

const sample = (arg: string) => {
    console.log(arg);
};

const hello = () => {
    ipcRenderer.send('hello', 'rend');
};

const api: IAPI = {
    sample,
    hello
};

export default api;
