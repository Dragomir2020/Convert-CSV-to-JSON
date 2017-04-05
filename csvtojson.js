var fs = require('fs');
    
    //require the csvtojson converter class 
    var Converter = require("csvtojson").Converter;
    // create a new converter object
    var converter = new Converter({});

    // call the fromFile function which takes in the path to your 
    // csv file as well as a callback function
    var json;
    //FILEPATH FOR READ
    converter.fromFile("csv/app_10.csv",function(err,result){
        // if an error has occured then handle it
        if(err){
            console.log("An Error Has Occured");
            console.log(err);  
        } 
        // create a variable called json and store
        // the result of the conversion
        json = result;
        
        //FILEPATH FOR WRITE
        fs.writeFile('json/app1.json', JSON.stringify(json), function (err) {
          if (err) return console.log(err);
          console.log('Saved');
        });
        // log our json to verify it has worked
    });

  
 