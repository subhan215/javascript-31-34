// Answer 1 //
// alert(new Date());
// Answer 2 //
/* var date = new Date();
var currentMonth = date.getMonth();
var monthsIndex = [0,1,2,3,4,5,6,7,8,9,10,11];
var monthsName = ["January", "Febuary", "March" , "April", "May", "June","July"
               , "August", "September", "October", "November", "December"];
                
for (var i = 0;i < monthsIndex.length; i++) {
    if(monthsIndex[i] === currentMonth) {
         alert("Current Month:" + monthsName[i]);
    }
} */

// Answer 3 //
/* var date = new Date();
var day = date.getDay();
var daysIndex = [0,1,2,3,4,5,6,7];
var daysName = ["Mon", "Tue", "Wed" , "Thu", "Fri", "Sat","Sun"];
                
for (var i = 0;i < daysIndex.length; i++) {
    if(daysIndex[i] === day) {
         alert("Current Day:" + daysName[i]);
    }
} */

// Answer 4 //
/* var date  = new Date();
var day = date.getDay();
if(day === 0 || day === 6){
    alert("It's a fun day!");
} else{
    alert("It's a working day!");
}
 */

// Answer 5 //
/* var date = new Date();
var currentDate = date.getDate();
if(currentDate <16 ){
    alert("First fifteen days of the month");
} else{
   alert("Last fifteen days of the month");
} */

// Answer 6 //
/* var date = new Date();
document.write("current time" + date + "<br> ");
var milliseconds = date.getTime();
document.write("elapsed milliseconds:" + milliseconds + "<br> ");
var minutes = (milliseconds/1000) / 60;
document.write("minutes:" + minutes); */

// Answer 7 //
/* var date = new Date();
var currentHours = date.getHours();
if(currentHours <= 12){
    alert("Its AM");
} else{
   alert("Its PM")
} */

// Answer 8 //
/* var laterDate = new Date();
alert(laterDate);
alert(laterDate.setFullYear(2020));
 */
// Answer 9 //
/* var date = new Date();
date.setFullYear(2015);
date.setMonth(5);
date.setDate(18);
var days2015 = date.getTime(2015)
var days2021 = date.getTime();
days2021 = ((((days2015 / 1000) / 60 ) /60) / 24) */

// Answer 10 //

// Answer 11 //
/* var date = new Date();
document.write("current date and time:" + date);
var hours = date.getHours();
date.setHours( "<br> after 1 hour:" + hours + 1);
document.write(date); */

// Answer 12 //
/* var date = new Date();
alert("current date and time:" + date);
var resetdate = date;
resetdate = date.setFullYear(date.getFullYear() - 100);
alert("100 years back:" + resetdate); */

// Answer 13 //
/* var date = new Date();
var year = date.getFullYear();
var input = prompt("Enter your age..");
var birthYear = year - input;
alert("Birth Year:" + birthYear); */

// Answer 14 //
/* var name = prompt("Enter your name");
var date = new Date();
var currentMonth = date.getMonth();
var dueDate = date.getDate();
var afterDueDate = date.getDate() + 10
var units = 57;
var chargePerUnit = 100;
var amount = units * chargePerUnit;
var latePayment = 700;
var afterDueDatePayment = amount + latePayment;
document.write("<h1>K-Electric Bill</h1>" +
    "<br> Customer Name: " + name +
    "<br> Month: " + currentMonth +
    "<br> Number of units: " + units +
    "<br> Charges per unit " + chargePerUnit +
    "<br> Net Amount Payable within " + dueDate  +  " nov: " + amount +
    "<br> Late Payment: " + latePayment +
    "<br> Gross Amount Payable after " + afterDueDate + " nov: " + afterDueDatePayment);
 */




