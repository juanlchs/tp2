document.getElementById("clickMe").onclick = test;
function test(){
    var altura=document.getElementById("altura").value;
    var peso=document.getElementById("peso").value;
    alert(peso/(altura*0.01*altura*0.01));
}   
