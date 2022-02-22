/*PART 1

1.Find the culprit fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>

SOLUTION:

Brackets needed to be closed.
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>



2.Find the culprit and invoke the alert

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
scripts.js
alert(“I’m invoked!”);



SOLUTION:  Brackets needed to be closed.

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

Script.js
alert("I’m invoked!");



3.Explain the below how it works
explain.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

SOLUTION:
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

Script.js
alert("I'm JavaScript!"); //Alerts Im JavaScript. 
alert('Hello') //Alters Hello even if semicolon is absent.
alert(`Wor //Alters Wor in one line and ld in next line.
 ld`) 
alert(3 + //Displays the result 6 in one line.
1
+ 2); 


4.Fix the below to alert Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;alert( admin ); // "Guvi geek"

SOLUTION:
Adding of spacing betweeen fname & lname

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script> <!-- correct close symbols " "-->
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek";
admin = fname+" "+lname;
alert(admin);



5.Fix the below to alert hello Guvi geek
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"let name = fname+lname;alert( 'hello ${name}' );

SOLUTION:
Proper usage of template literals in alert message. 

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script> <!-- correct close symbols " "-->
</body>
</html>
Script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}` );


6.Fix the below to alert sum of two numbers
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

SOLUTION:
ParseInt to convert string to number.
Fix.html
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script> <!-- correct close symbols " "-->
</body>
</html>

Script.js
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a+b);


7.If you run the below scritpt you will get “Code is Blasted”
Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
var a = "2" > "12";//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

SOLUTION:

The above code considers the values “2” and “12” as strings and compares them with their decimal ASCII value .
So the var a becomes as a boolean value and here it takes true .
If we need “Diffused” as output we should alter the condition to 
Var a = “2” < “12” ; 





8.How to get the success in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("Enter a number?");//Don't modify any code below thisif (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

SOLUTION:

Do not enter any value 
    (or)
Enter the value as NULL in the prompt box to obtain the output “Success”.


9.How to get the correct score in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

SOLUTION:

Script.js
let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

10.Fix the code to welcome the Employee
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';console.log(message);

SOLUTION:

Script.js

let login = 'Employee';
let message = (login == 'Employee') ?
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : 'Welcome':''
  console.log(message);


11.Fix the code to welcome the boss
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);

SOLUTION:
let message;
if (null || 2 || undefined )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
 console.log(message);

12.Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;//Dont change any code below this if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
SOLUTION:

let message;
let lock;
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

13.Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;//Dont change any code below thisif (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
SOLUTION:

let message;
let lock = 2;
if (lock && " " && undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

14.Change the code to print

3
2
1
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You can change only 2 characterslet i = 3;while (i) {
  console.log( --i );
}

SOLUTION:

let i = 3;
while (i) 
{
  console.log( i-- );
}

15.Change the code to print 1 to 10 in 4 lines
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

SOLUTION:

let num=1;
while(num<=10){
    console.log(num);
    num++;
}

16.Change the code to print even numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You are allowed to modify only one character for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}

SOLUTION:

Script.js
for (let i = 2; i <= 20; i += 2)
{ 
    console.log(i);
}

17.Change the code to print all the gifts
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js
let gifts = ["teddy bear", "drone", "doll"];for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');
}

SOLUTION:

Script.js
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) 
{
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


18.Fix the code to disarm the bomb.
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let countdown = 100;while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

SOLUTION:

Script.js
let countdown = 100;
while (countdown >= 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}




19.Whats the msg printed and why?
var lemein = “0”;
var lemeout = 0;
var msg = “”;if (lemein) {
 msg += “hi”;
 }if (lemeout) {
 msg += ‘Hello’;
}console.log(msg);

SOLUTION:

The message printed in the above given code will be “hi”.Because the if conditions handles a boolean of true value.


20.Whats the msg printed and why? Guess you answer before running it.
var lemein = “0”;
var lemeout = 0;
var msg = “”;if (lemein) {
 msg += “hi”;
 }if (lemeout) {
 msg += ‘Hello’;
}console.log(msg);

SOLUTION:

The message printed in the above given code will be “hi”.*/







