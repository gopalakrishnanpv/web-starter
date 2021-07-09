// // WRITE TO HTML
// document.write("Hello Javascript!!<br/>")
// document.write("Temperature Conversion<br/>");

// // WRITE TO CONSOLE
// console.log("Hello console!");

// // CONSTANTS
// const NORMAL_TEMP_FARENHEIT = 98.6;
// const NORMAL_TEMP_CELSIUS = (NORMAL_TEMP_FARENHEIT - 32) / 1.8;

// // VARIABLES
// var currentTempFarenheit = 99;
// var currentTempCelsius = (currentTempFarenheit - 32) / 1.8
// document.write("Your body temperature: " + currentTempFarenheit + " F (" + currentTempCelsius + " C)<br/>");
// document.write("Normal body temperature: " + NORMAL_TEMP_FARENHEIT + " F (" + NORMAL_TEMP_CELSIUS + " C)<br/>");
// if (currentTempFarenheit > NORMAL_TEMP_FARENHEIT) {
//     document.write("You have fever. Take rest!" + "<br/><br/>");
// }
// // DATATYPES
// // Primitive, Non-Primitive

// // PRIMITIVE
// // Number, String, Boolean, Undefined, null

// // NON-PRIMITIVE
// // Objects including Functions and Arrays


// // BOOLEAN
// // Returns true
// // 100,1,-1,"Hello,",10<20

// // Returns false
// // 0, -0, "", 10>20, undefined, null

// if (100) {
//     document.write("Passing 100 in condition returns true" + "<br>");
// } else {
//     document.write("Passing 100 in condition returns false" + "<br>");
// }

// // OPERATORS
// // Arithmetic (+, -, *, /), Assignment (=, *=, +=, -=), Relational or Comparison (<, > <=, >=, ==, ===), Logical (!, &&, ||), Conditional, typeof()
// // Unary (Sum++), Binary (a + b), Ternary(true ? a : b)

// var student_name;
// var marks;
// var pass_status;
// document.write(student_name + "<br>");
// document.write(marks + "<br>");

// student_name = "Krishna";
// marks = 90;
// pass_status = true;


// document.write(student_name + "<br>");
// document.write(marks + "<br>");
// document.write(pass_status + "<br><br>");


// // COMMENTS
// // Single line comment
// // Variable and constant declaration and intialization for:

// /*  Multi line Comment
//     Two lines are there in this comment */


// // IF ELSE STATEMENT
// for (var i = 0; i < 10; i++) {
//     if (i == 3) {
//         // CONTINUE
//         console.log("Continue executed!");
//         continue;
//     }
//     else if (i == 8) {
//         // BREAK
//         console.log("Break executed!");
//         break;
//     }
//     else {
//         console.log(i);
//         console.log("test");
//     }
// }

// // SWITCH
// var marks = 89;
// switch (true) {
//     case marks >= 80 && marks <= 100:
//         console.log("You are wonderful");
//         break;
//     case marks >= 60 && marks < 80:
//         console.log("You are good");
//         break;
//     default:
//         console.log("You are awesome!");
//         break;
// }

// // FOR LOOP
// console.log("For loop")
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("While loop")
// var i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// console.log("Do While loop")
// var i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 5)

// // FUNCTIONS
// SayHello("Gopal");
// function SayHello(name) {
//     console.log("Hello " + name + "!")
// }

// // NESTED FUNCTIONS
// function Message(message) {
//     function ToUser(name) {
//         return message + " " + name;
//     }
//     return ToUser;
// }

// console.log(Message("This is a new message to")("Krishna"));

// // BUILD IN FUNCTIONS
// // alert("hello");
// // confirm("are you sure you want to do this?");
// // prompt("Ok tell me what do you want?");
// var num = "23.93";
// console.log(isNaN(num));
// console.log(isFinite(num));
// console.log(parseInt(num));
// console.log(parseFloat(num));



// //6. parseInt
// document.write('parseInt("10"): ' + parseInt("10") + "<br>");

// document.write(
//     'parseInt("10 20 30"): ' + parseInt("10 20 30") + "<br>"
// );

// document.write(
//     'parseInt("10 years"): ' + parseInt("10 years") + "<br>"
// );

// document.write(
//     'parseInt("years 10"): ' + parseInt("years 10") + "<br><br>"
// );

// //7. parseFloat
// document.write(
//     'parseFloat("10.34"): ' + parseFloat("10.34") + "<br>"
// );

// document.write(
//     'parseFloat("10 20 30"): ' + parseFloat("10 20 30") + "<br>"
// );

// document.write(
//     'parseFloat("10.50 years"): ' + parseFloat("10.50 years") + "<br>"
// );

// document.write(
//     'parseFloat("years 10"): ' + parseFloat("years 10") + "<br><br>"
// );

//8. eval
// eval("2*3");
// document.write(eval("2*3") + "<br><br>");

// eval(
//     "var num1=2;var num2=3;var result=num1*num2;document.write(result+'<br><br>')"
// );

// //9. setTimeout
// function executeMe1() {
//     document.write("Function says hello after timeout!" + "<br><br>");
// }
// setTimeout(executeMe1, 3000);

// //10.setInterval
// function executeMe2() {
//     document.write("Function says hello every interval!" + "<br>");
// }
// setInterval(executeMe2, 3000);


// // EVENT HANDLERS
// function execute_onclick(name) {
//     alert(name + " says hello!");
// }

// // OBJECTS (USER DEFINED)
// var car = {
//     name: "BMW",
//     model: "SUV",
//     color: "RED",
//     numberOfGears: 6,
//     currentGear: 4,
//     currentSpeed: 90,
// }
// console.log(car.color);
// console.log(car["color"]);

// // OBJECTS (BUILT IN)
// // STRINGS
// var myStr = "Are you enjoying JavaScript? Are you?";
// console.log(myStr.match('Are'));
// console.log(myStr.replace(/Are/g, "Do"));
// console.log(myStr.search('Are'));
// console.log(myStr.split('Are'));
// console.log("SLICE: " + myStr.slice(8, -2));
// console.log("SUBSTRING: " + myStr.substring(18, 8));
// console.log("SUBSTR: " + myStr.substr(4, 6));

// // REGEX
// var charRegex = new RegExp("(?=.*q)");
// var regexString = "qwertyuiopasdfghjklzxcvbnm1234567890-=[]\;',./_+{}|:\"<>?";
// console.log(charRegex.test(regexString));
// console.log(regexString.replace(charRegex, "qqqqqqqq"));
// console.log(regexString.search(charRegex));
// var username = "gopalakrishnanp";
// var email = "gopalakrishnanp@gmail.com";
// var number = 123456711120;
// var regExUsername = new RegExp("(?=.[a-zA-Z0-9]{6-10})");
// var regExEmail = new RegExp("(?=.+@)(?=.+.com)");
// var regExNumber = new RegExp("(?=^[0-9]{10,14}$)");
// console.log(regExUsername.test(username));
// console.log(regExEmail.test(email));
// console.log(regExNumber.test(number));

// // ARRAYS
// var array = new Array("HTML", "CSS3", "JAVASCRIPT");
// var array2 = ["HTML", "CSS3", "JAVASCRIPT"];
// array2.push("JQUERY");
// array2.pop();
// console.log(array2);
// array2.splice(2, 0, "BMW");
// console.log(array2.concat(array));
// array2.forEach(x => {
//     console.log(x.toLowerCase());
// });

// // MATH
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.round(4.6));
// console.log(Math.min(4, 6));
// console.log(Math.max(4, 6));
// console.log(Math.floor(Math.random() * 100));

// // JSON
// var objectJSON = {
//     firstName: "Bob",
//     lastName: "Horton",
// };
// console.log(JSON.stringify(objectJSON));

// var stringJSON = '{"firstName": "Bob","lastName": "Horton"}';
// console.log(JSON.parse(stringJSON));

// BOM - BROWSER OBJECT MODEL
// document, window, history, navigator, location

// // DOCUMENT
// // Dynamic styling
// document.getElementById("course").style.color = "red";
// // Get attribute
// console.log(document.getElementById("course").attributes["class"].value);
// // Set attribute
// document.getElementById("course").setAttribute("class", "courseClassNew")
// console.log(document.getElementById("course").attributes["class"].value);
let ateicecream = false;
function eatIcecream() {
    if (!ateicecream) {
        ateicecream = true;
        document.getElementById("conetitle").innerHTML = "Hope you Liked it!";
        document.getElementById("coneimage").src = "assets/empty-cone.jpg";
        document.getElementById("conehint").innerHTML = "Click to refill";
        document.body.style.backgroundColor = "lightgreen";

    } else {
        ateicecream = false;
        document.getElementById("conetitle").innerHTML = "Here is your refilled cone!";
        document.getElementById("coneimage").src = "assets/full-cone.jpg";
        document.getElementById("conehint").innerHTML = "Enjoy yourself!";
        document.body.style.backgroundColor = "lightblue";
    }

}

// function submit_form() {
//     // getelement by id
//     console.log(document.getElementById("name").value);
//     // getelement by class name
//     console.log(document.getElementsByClassName("email").value);
//     // getelement by tagname
//     console.log(document.getElementsByTagName("input").value);
//     // get elements by css selector
//     console.log(document.querySelectorAll("input").value);
// }

// // WINDOW
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);
// // localStorage.setItem("usernameObject", objectJSON);
// console.log(localStorage.getItem("usernameObject"));
// // sessionStorage.setItem("username", "Bob Horton");
// console.log(sessionStorage.getItem("username"));
// window.open("https://www.google.com");
// setTimeout(() => { console.log("hello") }, 5000);
// window.close();


// // History (Revisit)
// location.assign('http://www.facebook.com');
// history.back();
// console.log(history.forward());
// // console.log(history.go(1));
// console.log(history.length);

// // Navigator
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.cookieEnabled);
// console.log(navigator.platform);
// console.log(navigator.userAgent);


// // Location
// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.port);
// console.log(location.protocol);
// var blue = "hello world";
// document.write(window.blue);
// console.log(document.body.parentNode);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.childNodes);
// console.log(document.getElementById("course").nextElementSibling);
// console.log(document.body.previousElementSibling);

// Create Element
// var header = document.createElement("h1");
// var headerText = document.createTextNode("Hello World!!");
// document.body.appendChild(header).appendChild(headerText);
// document.body.header.append(header).appendChild(headerText);
// document.body.header.remove(header);


