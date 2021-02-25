const { remote } = require("electron");
const { BrowserWindow } = remote;

function navigateTo(url) {
  document.querySelector("webview").src = url;
}

function getControlsHeight() {
  let controls = document.querySelector("#controls");
  if (controls) {
    return controls.offsetHeight;
  }
  return 0;
}

function backButton() {
  document.querySelector("#back").onclick = () => {
    let attribute = document.getElementById("webview");
    let back = webview.goBack();
    // let back = attribute.getAttribute("data-home");
    // navigateTo(back);
  };
}

function forwardButton() {
    document.querySelector("#forward").onclick = () => {
        let attribute = document.getElementById("webview");
        let forward = webview.goForward();
    }
}