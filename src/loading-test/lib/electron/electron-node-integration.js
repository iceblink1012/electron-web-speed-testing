const ELECTRON_ENABLE = false;

try {
    window.nodeRequire = require;
    //delete window.require;
    delete window.exports;
    delete window.module;
    
    ELECTRON_ENABLE = true;
}
catch (_e) {}