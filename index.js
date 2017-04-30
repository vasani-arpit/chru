var nativefier = require('nativefier').default;

// List all files in a directory in Node.js recursively in a synchronous fashion
var injectFileList = function (dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = injectFileList(dir + '/' + file, filelist);
        }
        else {
            filelist.push(dir + '/' + file);
        }
    });
    return filelist;
};

//this was to get a list and pass the files paths in array to the nativefier so that it will be injected to the app.
//but it is not working without bundling. only first js is being injected.
//var fileListArray = injectFileList("./inject");

// possible options, defaults unless specified otherwise
var options = {
    name: 'Whatsapp Web', // will be inferred if not specified
    targetUrl: 'http://web.whatsapp.com', // required
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
    inject: ["./inject/inject.js","./inject/css/index.css"], // suppose to be fileListArray here but until bundling issue resolves keeping it hardcoded.
    singleInstance: true
};

nativefier(options, function (error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});