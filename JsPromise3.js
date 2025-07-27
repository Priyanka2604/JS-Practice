//Waiting for a Timeout
//Waiting for a File

//Waiting for a Timeout

//Example Using Callback
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}

//Example Using Promise
let myPromise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise1.then(function(value) {
    console.log(value);
  });


  
/* not able to understand on 1st attempt , please come back here
//Waiting for a File

//Example Using Callback
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);

//Example Using Promise
let myPromise2 = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise2.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  */