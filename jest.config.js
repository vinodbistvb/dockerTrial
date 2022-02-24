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
    reporters: [
      'default',
      [ 'jest-junit', {
        outputDirectory: "./reports",
        outputName: fileName
      } ]
    ]
  };
