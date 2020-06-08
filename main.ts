const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win;

const createWindow = () => {
    win = new BrowserWindow({ width: 800, height: 600 })

    win.loadUrl(
        url.format({
            pathname: path.join(__dirname, '/dist/index.html'),
            protocol: "file:",
            slashes: true
        })
    )
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    process.platform !== "darwin" && app.quit() 
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})