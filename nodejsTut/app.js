/*// __dirname Global Variable
console.log(__dirname);

// __filename Global Variable
console.log(__filename);*/

const os = require('os');
const sayHello =require('./hello.js');
const callFunction =require('./mymodule.js');
// Import 'path' module using the 'require()' method:
const path = require('path');

const fs = require('fs');
 const pathDir = 'C:/Users/kathy/OneDrive/Dokumente/Schule/5ACIFT/WMC/nodejsTut/myFolder/mySyncFile.txt';
const pathParentDir = 'C:/Users/kathy/OneDrive/Dokumente/Schule/5ACIFT/WMC/nodejsTut/myFolder';
/*fs.mkdir(pathParentDir, (err)=>{
    if(err){console.log(err)}
    else{
        console.log('Directory successfully created');
    }
}) */
fs.readdir(pathParentDir, (err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Directory read successfully. Here is the content:');
        console.log(files);
    }
})
fs.rename(pathDir, 'C:/Users/kathy/OneDrive/Dokumente/Schule/5ACIFT/WMC/nodejsTut/myFolder/myNewSyncFile.txt', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Filename changed successfully.');
    }
})
const message = 'This should also appear in the newly created file.'+ 
'If it doesn´t a error message should be displayed.'+
'This message should then be displayed after the file has been read into the program';

//Read and write synchroniously

try{
    fs.writeFileSync(pathDir, message);
    console.log('Operation write successful.');

    const data = fs.readFileSync(pathDir, {encoding: 'utf-8'});
    console.log('Operation read successful.');
    console.log(data);
}
catch(err){
    console.log('An error occured. The operation has been cancelled.');
    console.log(err);
}

/* fs.writeFile(pathDir,message, {flag: 'a'}, (err)=> {
    if(err)
    {
        console.log(err);
        return;
    }
    else{
        console.log(pathDir + ' File succesfully created');
    }
})
fs.readFile(pathDir, {encoding: 'utf-8'}, (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('File successfully read');
        console.log(data);
    }
}) */
// Assigning a path to the myPath variable
const myPath = '/mnt/c/Desktop/NodeJSTut/app.js'

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

// Let's See The Results:
console.log(pathInfo);

sayHello('Peter');
sayHello('Maria');
sayHello('Kurt');
callFunction.myFunction1();
callFunction.myFunction2();
console.log(callFunction.foo);


// os.uptime()

const systemUptime = os.uptime();

// os.userInfo()

const userInfo = os.userInfo();

// We will store some other information about my WindowsOS in this object:
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

// Let's Check The Results:
console.log('uptime');
console.log(systemUptime);
console.log('user info');
console.log(userInfo);
console.log('other info');
console.log(otherInfo);

fs.unlink(pathDir, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('File successfully deleted');
    }
})
fs.readdir(pathParentDir, (err, directory)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(directory);
    }
})

