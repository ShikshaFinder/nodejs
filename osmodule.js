const os = require("os");
console.log(os.freemem()); // it will give the free memory of the system;
console.log(os.totalmem()); // it will give the total memory of the system;
console.log(os.platform()); // it will give the platform of the system;
console.log(os.userInfo()); // it will give the user info of the system;
console.log(os.uptime()); // it will give the uptime of the system;
console.log(os.type()); // it will give the type of the system;
console.log(os.release()); // it will give the release of the system;
console.log(os.hostname()); // it will give the hostname of the system;

// what is the difference between os and fs module
// os module is used to get the information about the operating system on which the node is running
// fs module is used to interact with the file system on the operating system
