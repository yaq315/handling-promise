
//task1


try{

    const arr=new Array(-1)
}
catch(error){
    
    document.write( error.name+"<br>" );
    document.write( error.message+"<br>" )
}
//task2
let b = 10;

try{
    b=y+10
}
catch(error){
 
    document.write( error.name+"<br>" );
   
}
//task3
try{

    const a=decodeURI("%%%")
}
catch(error){
   
    document.write( error.name+"<br>" );
   
}

// task4

let x = 10;

try{
    document.write(x.toUpperCase())
}
catch(error){
   
    document.write( error.name+"<br>" );
   
}
//task5
try{

    const arr=new Array(-1)
}
catch(error){
    console.log( error.message )
}
try{
    b=y+10
}
catch(error){
    console.log( error.message)
}

try{

    const a=decodeURI("%%%")
}
catch(error){
    console.log( error.message )
}

try{
    document.write(x.toUpperCase())
}
catch(error){
    console.log( error.message)
}

//task6
function squareNumber(num) {
    
    if (typeof num !== "number") {
      throw "argument is not a number"; 
    }
      return num * num;
  }
    try {
    console.log(squareNumber(9)); 
    console.log(squareNumber("Good")); 
  } catch (error) {
    console.error(error); 
  }  

  //order task
  function placeOrder(order, callback) {
    console.log(`Placing order for ${order}`);
    setTimeout(() => {
      console.log(`Order for ${order} has been placed.`);
      callback(order);
    }, 2000);
}

function prepareOrder(order, callback) {
    console.log(`preparing: ${order}`);
    setTimeout(() => {
      console.log(`${order} is ready`);
      callback(order);
    }, 3000);
}

function packageOrder(order, callback) {
    console.log(` packaging:${order}`);
    setTimeout(() => {
      console.log(`${order} has been packaged.`);
      callback(order);
    }, 2000);
}

function deliverOrder(order, callback) {
    console.log(` Delivering${order}`);
    setTimeout(() => {
      console.log(`${order} has been delivered`);
      callback(order);
    }, 4000);
}

function processOrder(order) {
    placeOrder(order, (placedOrder) => {
      prepareOrder(placedOrder, (preparedOrder) => {
        packageOrder(preparedOrder, (packagedOrder) => {
          deliverOrder(packagedOrder, () => {
            console.log("Order process completed successfully.");
          });
        });
      });
    });
}
processOrder("bizza")

// finally{
//     document.write('Finally code is executed now.<br>')
// }

// document.write('The rest of code will not executed');




// let x = -3;

// try {
//     if (x < 0) {
//         throw 'x value cannot be negative';
//     }
//     else {
//         document.write('x value is accepted.<br>');
//     }
// }
// catch(error) {
//     document.write('Error: ' + error + '<br>');
// }

// document.write('The rest of code will be executed.');



// let result = 10 / 0;
// console.log(result);

// try{
//     const h1 = document.querySelector("h1");
// h1.innerText = "Hello this is h1"


// }
// catch(error){
//     console.log(error.name + " " + error.message);
// }


// function executeCode() {
 
//     alert('This code execute first');


//     document.querySelector('body').style.background = 'green';}

    // function executeCode() {
    //     setTimeout(() => {
    //         alert('The alert is executed second');
    //     }, 2000);

    //     document.querySelector('body').style.background = "green";
    // }



// function printNames(arr, callbackFunction) {
//     for (e of arr) {
//         callbackFunction(e);
//     }
// }
// const names = ['Mhamad', 'Hala', 'Samy', 'Maria'];

// printNames(names, function(name) {
//     document.write(name + ' contains ' + name.length + ' letters.<br>');
// });



// function printNames(arr) {
//     for (e of arr) {
//         document.write(e + ' contains ' + e.length + ' letters.<br>');
//     }
// }

// const names = ['Mhamad', 'Hala', 'Samy', 'Maria'];

// printNames(names);












// let myPromise = new Promise((resolve , reject)=>{
//     let response = false ;
//     if(response){
//         resolve("i get data successfully");
//     }else{
//         reject("i cannot get data")
//     }
// });


// // myPromise;

// myPromise.then( 
//     (resolve)=>{console.log("okay")},
//     (reject)=>{console.log("failed")}
// );

    
 