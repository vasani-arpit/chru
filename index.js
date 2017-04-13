var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
    name: 'google Web', // will be inferred if not specified
    targetUrl: 'http://google.com', // required
    //platform: 'darwin', // defaults to the current system
    arch: 'x64', // defaults to the current system    
    version: '0.36.4',
    out: './out',
    overwrite: true,
    asar: false, // see conceal
    //icon: '~/Desktop/icon.png',
    counter: false,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: false,
    //userAgent: 'Mozilla ...', // will infer a default for your current system
    ignoreCertificate: false,
    insecure: false,
    //honest: false,
    zoom: 1.0,
    inject:['./inject.js'],
    singleInstance: true
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});