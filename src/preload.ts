import { contextBridge } from 'electron';
import api from './api/api';

// 第2引数のオブジェクトが、window オブジェクトに、第1引数の名前で作成される
contextBridge.exposeInMainWorld('api', api);
