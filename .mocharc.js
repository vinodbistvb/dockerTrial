let currentdate = new Date(); 
let datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() 
                // + "-"  
                // + currentdate.getHours() + ":"  
                // + currentdate.getMinutes() + ":" 
                // + currentdate.getSeconds();                
                // + currentdate.getSeconds();

let fileName = datetime + "_testResults.xml";


module.exports = {
    timeout: 300000,
    slow: 10000,
    recursive: true,
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
        mochaFile: `./reports/${fileName}`,
     
    },
    // require: [
    //   'dotenv/config',
    //   './test/globalHooks.js'
    // ]
  };
  
