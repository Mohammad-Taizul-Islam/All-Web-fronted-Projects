const randomResult=Math.floor(Math.random()*10+1);
let guessess=0;

document.getElementById("submitBtn").onclick = function(){
    let guess = document.getElementById("guessText").value;
    guessess+=1;
    if(guess == randomResult){
        alert(`${randomResult} is the # . It took you ${guessess} guessess`);
    }
    else if(guess < randomResult)
    {
        alert("It's too small");
    }
    else{
        alert("It's too large");
    }
}