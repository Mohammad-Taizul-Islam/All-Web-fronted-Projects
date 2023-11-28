function toCelcious(temp){
    return (temp-32)*(5/9);
}
function toFahrenheit(temp){
    return (temp*9/5)+32;
}

document.getElementById("submitBtn").onclick = function(){
    let temp;
    if(document.getElementById("cButton").checked)
    {
        temp=document.getElementById("textBox").value;
        temp=Number(temp);
        temp=toCelcious(temp);
        document.getElementById("temperLabel").innerHTML = temp + "°C";

    }
    else if(document.getElementById("fButton").checked)
    {
        temp=document.getElementById("textBox").value;
        temp=Number(temp);
        temp=toFahrenheit(temp);
        document.getElementById("temperLabel").innerHTML = temp + "°F";

    }
    else{
        document.getElementById("temperLabel").innerHTML = "Check a temparature type !";

    }
}