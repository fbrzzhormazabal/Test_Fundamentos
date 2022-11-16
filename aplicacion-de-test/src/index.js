const {createWindow,} = require('./main')
const {app, ipcMain} = require('electron')

require('./database')

require('electron-reload')(__dirname)

app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow);