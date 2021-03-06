const electron = require("electron");
const { BrowserWindow, app } = electron;
const url = require("url");
const path = require("path");

exports.window;

exports.createWindow = () => {
  this.window = new BrowserWindow({
    width: 500,
    height: 300,
    minWidth: 500,
    minHeight: 300,
    show: false
  });

  this.window.loadURL(
    url.format({
      pathname: path.join(__dirname, "..", "dist", "renderer", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // this.window.webContents.openDevTools();

  this.window.on("closed", function() {
    this.window = null;
  });

  return this.window;
};
