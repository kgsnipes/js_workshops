//older JS
var person_name='John Doe';
var age=30;
var isMale=true;
var salary=1000.00;
var employee1={"name":"John Doe","age":40,"salary":100000.00,"isManager":false};

var employee2=new Object();
employee2.name="Mary Jane";
employee2.age=30;
employee2.salary=150000;
employee2.isManager=true;

var employee3=Object.assign({},employee1,{"name":"Employee 3"})

var num_array=[10,20,30,40];

// console.log("Person Name : "+person_name);
// console.log("Person Age : "+age);
// console.log("Gender : "+(isMale?"Male":"Female"));
// console.log("Salary : "+salary);
// console.log('Employee 1',employee1);
// console.log('Employee 2',employee2);
// console.log('Employee 3',employee3);
// console.log("Number Array ",num_array);
// console.log('Check if a reference is an array : ',Array.isArray(num_array));

//iterating an array
function iterateOverArray(arr)
{
    for(i=0;i<arr.length;i++)
    {
        console.log('Element ',arr[i]);
    }
}

// iterateOverArray(num_array);

function showMessage()
{
    console.log("Hello world!");
}

// showMessage();

var add=function(a,b)
{
    console.log("Sum of "+a+" and "+b+" is "+(a+b));
}

// add(10,20);

//run this in the browser
// (function(){
//     console.log('This will execute!!');
// })();

// ajax - asyn javascript and xml calls

// // Create an XMLHttpRequest object
// const xhttp = new XMLHttpRequest();

// // Define a callback function
// xhttp.onload = function() {
//   // Here you can use the Data
// }

// function makeRequest()
// {
//     xhttp.open("GET", "http://hostname/ajax_response");
//     xhttp.send();
// }




// ECMA5 ECMA6 and newer

// num_array.forEach(function(value){
//     console.log('Element : ',value);
// });
