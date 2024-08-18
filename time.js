const moment = require('moment');//npm install moment//

const chalk = require('chalk');


const time=moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(chalk.green(time))  ;

const date = new Date();    
console.log(chalk.blue(date));  
