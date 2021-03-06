// Утилиты
const path = require("path");
const fs = require("fs");

// Электрон
const electron = require("electron");
const app = electron.app;

// Главное окно
const window = require("./src/window");

// Меню (для стандартных горячих клавиш)
const { Menu } = require("electron");
const menu = require('./src/menu');
const template = menu.createTemplate(app.name);

let mainWindow;
let initPath;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on("ready", () => {
  initPath = path.join(app.getPath("userData"), "init.json");

  try {
    data = JSON.parse(fs.readFileSync(initPath, "utf8"));
  } catch (e) {}

  mainWindow = window.createBrowserWindow();

  mainWindow.loadURL(`file://${__dirname}/index.html`); // Load custom html file with external content using webview tag
  //mainWindow.loadURL("https://github.com"); // Load directly an URL if you don't need interface customization

  // Display Dev Tools
  //mainWindow.openDevTools();

  // https://www.electronjs.org/docs/api/browser-window#showing-window-gracefully
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  data = {
    bounds: mainWindow.getBounds(),
  };
  fs.writeFileSync(initPath, JSON.stringify(data));
  app.quit();
});