// const path = require('path');   //determine path
// const currentPath = path.resolve(__dirname,);
// console.log("CurrentPath" ,currentPath);


//file read write

const fs = require('fs');  //file system module path 
console.info(`reading file from ${currentPath}`);
const data =fs.readFileSync(path.join(currentPath, "./1.js"),"utf-8");
console.log(data);

 fs.writeFileSync(path.join(currentPath, "./op.txt"),"This is a new file created by Rinju Pokhrel");
// // //os module
// const os = require('os');  //os module path
// console.log(os.platform());  
// console.log(os.freemem());  //to get the platform
// console.log(os.userInfo());  //to get the user information
// console.log(os.homedir());  //to get the home directory