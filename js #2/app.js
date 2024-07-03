var a=prompt("enter your city")
if(a==="karachi"){
    alert("welcome to the city of light")
}else{
    alert("okay")
}
var b =prompt("enter your gender?")
if(b==="male"){
    alert("good morning sir!")

}else{
    alert("god morning mam!")
}
var a=prompt("remaining fuel?")
if(a<0.25){
    alert("please refill the fuel")
}
var a=prompt("Enter traffic signal colors.")
z="red"
b="green"
c="yellow"
if(a===z){
    alert("must stop");

}else if(a===b){
    alert("move now");
}else if (a===c) {
    alert("ready to go");
}
var a= +prompt("obtaining num in three subjects")
var b=300
var c=a/b*100
document.write("total marks:"+ b+ "<br>")
document.write("obtain mark:"+ a+ "<br>")
document.write("percentage:"+ c + "<br>")
if(c>=80){
    document.write("grade A-one:"+ "<br>")
    document.write("Remarks;Excellent:"+ "<br>")
}
 else if(c>=70){
    document.write("grade A:"+ "<br>")
    document.write("Remarks;good:"+ "<br>")
}
 else if(c>=60){
    document.write("grade B:"+ "<br>")
    document.write("Remarks: You need to improve"+ "<br>")
}
 else if(c<60){
    document.write("grade Fail:"+ "<br>")
    document.write("Remarks Sorry:" + "<br>")}

var user= +prompt("enter secret num")
var correctans=5
if ( user===correctans){
    alert("Bingo! correct answer")}
else if ( user===++correctans){
    alert("you are near enough the num")
}else{ alert("better luck next time")}
var u=+prompt("guess any num?")
if(u %2 ===0){
    alert("even Number")

}else{
    alert("odd number")
}
var u=+prompt("enter any number?")
if (u %3===0){
    alert("divisible by 3")
}
var t=+prompt("enter the temperature of the area")
if (t>=40){
    alert("its too hot")
}else if(t>=30){
    alert("The weather today is Normal")
}else if( t>=20){
    alert("Todays weather is cool")

}else if(t>10){
    alert("OMG! todays weather is so cool")
}
var a=+prompt("enter first number")
var b=+prompt("enter Second number")
document.write("addition:" + a + b +"<br>")
document.write("substraction:", + a - b +"<br>")
document.write("multiplication:" + a * b +"<br>")
document.write("division:" + a / b +"<br>")
document.write("modulus:" + a % b +"<br>")