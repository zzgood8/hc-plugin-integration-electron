import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import * as api from './api'

// 关闭安全警告
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
// 预加载脚本
const preload = join(__dirname, './preload.js')

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload
    },
    frame: false,
    minHeight: 500,
    minWidth: 750
  })
  win.loadURL(process.env.VITE_DEV_SERVER_URL as string)
  win.webContents.openDevTools()
  win.menuBarVisible = false

  // 监听窗口最小化
  ipcMain.on('window-min', () => {
    win.minimize()
  })
  // 监听窗口最大化
  ipcMain.on('window-max', () => {
    if (win.isMaximizable()) {
      win.maximize()
    } else {
      win.restore()
    }
  })
  // 监听窗口关闭
  ipcMain.on('window-close', () => {
    win.close()
  })
}

app.whenReady().then(createWindow)
