// //QUESTION NO :1

//Create two JSON objects with the same properties in different orders.
const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };
// Convert both JSON objects to strings.
const json1 = JSON.stringify(obj1);
console.log(json1);
 const json2 = JSON.stringify(obj2);
console.log(json2);
if(json1===json2){
    console.log("both are equal")
}
else{
    console.log("both are different");
}

//QUESTION;2

//!step 1 :- create a XHR object
var request =new XMLHttpRequest();
//*step 2;- opening a connetion to the server
request.open("GET","https://restcountries.com/v3.1/all",true)
//?step 3:-inviting a bridge to the server/ sending a request/sending aconnetion
request.send();
//!step 4:- server response
request.onload = function(){
    var data = request.response;
    console.log(data);
    var reuslt = JSON.parse(data);
    console.log(reuslt);
    console.log(reuslt[0].area);
    // for accessing multiple value use looping
    for(var i=0; i<reuslt.length;i++){
        console.log(reuslt[i].flags);
    }
}
//QUESTION NO:3

//!step 1 :- create a XHR object
var request1 =new XMLHttpRequest();
//*step 2;- opening a connetion to the server
request1.open("GET","https://restcountries.com/v3.1/all",true)
//?step 3:-inviting a bridge to the server/ sending a request/sending aconnetion
request1.send();
//!step 4:- server response
request1.onload = function(){
    var data1 = request1.response;
    console.log(data1);
    var reuslt1 = JSON.parse(data1);
    console.log(reuslt1);
    console.log(reuslt1[0].area);
    // for accessing multiple value use looping
    for(var i=0; i<reuslt1.length;i++){
        console.log(reuslt1[i].name.common,reuslt1[i].countries,reuslt1[i].population);
    
  }

  }
// //Name,COUNTRIES,REGION,POPULATION

//!step 1 :- create a XHR object
var request2 =new XMLHttpRequest();
//*step 2;- opening a connetion to the server
request2.open("GET","https://restcountries.com/v3.1/all",true)
//?step 3:-inviting a bridge to the server/ sending a request/sending aconnetion
request2.send();
//!step 4:- server response
request2.onload = function(){
    var data2 = request2.response;
    console.log(data2);
    var reuslt2 = JSON.parse(data2);
    console.log(reuslt2);
    console.log(reuslt2[0].area);
    // for accessing multiple value use looping
    for(var i=0; i<reuslt2.length;i++){
        console.log(reuslt2[i].region,reuslt2[i].subregion);
       
    }    
}
