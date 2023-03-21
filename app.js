// {app}            Module to control application life.
// {BrowserWindow}  Module to create native browser window.
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

var isWin = process.platform === 'win32';
var isDarwin = process.platform === 'darwin'

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform != 'darwin') {
  //   app.quit();
  // }


});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 500,
    minHeight: 200,
    //acceptFirstMouse: true,
    titleBarStyle: 'hidden',
    frame: false
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/mhm.html');

  // Open the DevTools.
  //mainWindow.openDevTools();

  if(process.platform === 'win32'){
    mainWindow.maximize()
  }
  
  if(process.platform === 'darwin'){
    mainWindow.width = 800,
    mainWindow.height = 600
  }
  
  // function openCity(evt, cityName) {
  //   // Declare all variables
  //   var i, tabcontent, tablinks;
  
  //   // Get all elements with class="tabcontent" and hide them
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  
  //   // Get all elements with class="tablinks" and remove the class "active"
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }
  
  //   // Show the current tab, and add an "active" class to the button that opened the tab
  //   document.getElementById(cityName).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }



  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
