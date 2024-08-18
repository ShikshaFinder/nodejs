const fs = require("fs");

fs.writeFileSync("read.txt", "Welcome to the file system");

fs.appendFileSync("read.txt", " This is the append file system");