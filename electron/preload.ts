import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('windowClose', () => {
  ipcRenderer.send('window-close')
})

contextBridge.exposeInMainWorld('windowMin', () => {
  ipcRenderer.send('window-min')
})

contextBridge.exposeInMainWorld('windowMax', () => {
  ipcRenderer.send('window-max')
})

contextBridge.exposeInMainWorld('isApp', true)
