    function showSection(id){

let sections=document.getElementsByClassName("section");
for(let i=0; i<sections.length;i++){
sections[i].style.display="none";
}

document.getElementById(id).style.display="block";
}

function login(){
let user=document.getElementById("userid").value;
let pass=document.getElementById("password").value;
if (user==="durga"&&pass==="0503"){
alert("Login Successful");
}
else{
alert("Invelid Login");
}
}