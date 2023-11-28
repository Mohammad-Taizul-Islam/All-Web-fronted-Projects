
document.getElementById("submitButton").onclick = function(){
    let number1=document.getElementById("textField1").value;
    let number2=document.getElementById("textField2").value;
    let result=number1+number2;
    console.log(result);
    document.getElementById("resul").innerHTML=result;
}
