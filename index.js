// Code your solution here

/*      1. findMatching()
a. Takes an array of drivers' names and a string as arguments.
b. Returns the matching list of drivers. 
N/B: The function should be case insensitive.   
*/

function findMatching(collection, driverName) {
    let results = [];

    for (const driver of collection) {
        if (driver.toUpperCase() === driverName.toUpperCase()){
            results.push(driver); 
        }
    }

    return results;
}



/* 2. fuzzyMatch () 
a. Takes an array of drivers names 
b. Takes a string as arguments for querying the array 
c. Returns all drivers whose names begin with the provided letters.
*/

function fuzzyMatch(collection,searchLetters){
    let results = [];

    for( const driver of collection ){
        if( driver.startsWith(searchLetters)){
            results.push(driver);
        }
    }

    return results;
}


/* 3. matchName () - 
a. Takes an array of driver objects 
b. Takes a string as arguments. 

- Each driver object has two properties: 
i.name 
ii.hometown. 
The function should return each element whose
 name property matches the provided string argument. */

function matchName(collection,property){
    let results = [];

    for (const driver of collection ){

        if(driver["name"] === property){

            results.push(driver);
        }


    }

    return results;
}
