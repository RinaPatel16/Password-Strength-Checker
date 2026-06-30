const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

password.addEventListener("keyup", checkPassword);

function checkPassword() {

let pass = password.value;
let strength = 0;

if(pass.length >= 8){
strength++;
document.getElementById("length").className="valid";
}else{
document.getElementById("length").className="invalid";
}

if(/[A-Z]/.test(pass)){
strength++;
document.getElementById("upper").className="valid";
}else{
document.getElementById("upper").className="invalid";
}

if(/[a-z]/.test(pass)){
strength++;
document.getElementById("lower").className="valid";
}else{
document.getElementById("lower").className="invalid";
}

if(/[0-9]/.test(pass)){
strength++;
document.getElementById("number").className="valid";
}else{
document.getElementById("number").className="invalid";
}

if(/[!@#$%^&*(),.?":{}|<>]/.test(pass)){
strength++;
document.getElementById("special").className="valid";
}else{
document.getElementById("special").className="invalid";
}

let bar = document.getElementById("bar");
let text = document.getElementById("strengthText");

if(strength <= 2){
bar.style.width="35%";
bar.style.background="red";
text.innerHTML="<strong>Strength:</strong> Weak";
}
else if(strength <= 4){
bar.style.width="70%";
bar.style.background="orange";
text.innerHTML="<strong>Strength:</strong> Medium";
}
else{
bar.style.width="100%";
bar.style.background="green";
text.innerHTML="<strong>Strength:</strong> Strong";
}

}

toggle.addEventListener("click", function(){

if(password.type==="password"){
password.type="text";
toggle.innerHTML="Hide";
}else{
password.type="password";
toggle.innerHTML="Show";
}

});
