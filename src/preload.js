// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
try {
  // Export to an electron client ( App.js and etc. )
  window.preload = {
    is_dev: require("electron-is-dev"),
    native: require("../native")

    // Note: Uncomment if you wanto use `electron.remote` in App.js or elsewhere
    // , remote: require( 'electron' ).remote;
  };
} catch (e) {
  const fs = require("fs");
  fs.writeFileSync("preload.error.log", e);
}


window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    // replaceText(`${type}-version`, process.versions[type])
    replaceText(`${type}-version`, require("../native").hello())
  }

})