const {createWindow} = require('./main')
const {app} = require('electron')

require('./database')

app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow);