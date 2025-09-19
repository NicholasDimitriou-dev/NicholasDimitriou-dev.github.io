document.querySelector("#guessBtn").addEventListener("click", guess);

document.querySelector("#reset").addEventListener("click", reset);

document.querySelector("#reset").style.display = "none";
let correctGuess = Math.floor(Math.random()*99+1);
let numofguess = 7;
let numGamesWon = 0;
let NumGamesLost = 0;
document.querySelector("#win").textContent += ""+numGamesWon;
document.querySelector("#lost").textContent += ""+NumGamesLost;

function reset(){
    document.querySelector("#answers").textContent = "";
    numofguess = 7;
}
function guess(){
    
    let userGuess = document.querySelector("#guessBox").value;
    //alert(userGuess);
    document.querySelector("#answers").textContent += `${userGuess} `;
    if(numofguess > 0){
        if(userGuess>=100){
            alert("Error: too big a guess");
        } 
        if (userGuess<=0){
            alert("error: too small a guess");
        }
        if (userGuess == correctGuess){
            document.querySelector("#yourGuess").textContent = "Congrats, your guess was correct";
            document.querySelector("#yourGuess").style.color = "#39FF14"
            numGamesWon++;
            document.querySelector("#guessBtn").style.display = "none";
            document.querySelector("#reset").style.display = "inline";
        }

        if(userGuess > correctGuess){
            document.querySelector("#yourGuess").textContent = "Your guess was too high";
            document.querySelector("#yourGuess").style.color = "yellow"
        }
        if(userGuess < correctGuess){
            document.querySelector("#yourGuess").textContent = "Your guess was too low";
            document.querySelector("#yourGuess").style.color = "yellow"
        }
    }
    if(numofguess <= 0){
       document.querySelector("#yourGuess").textContent = "You lose: "
       document.querySelector("#yourGuess").textContent += correctGuess;
       document.querySelector("#yourGuess").style.color = "red"
        NumGamesLost++;
        document.querySelector("#guessBtn").style.display = "none";
         document.querySelector("#reset").style.display = "inline";
       if(userGuess == correctGuess){
            document.querySelector("#yourGuess").textContent = "Correct you still lost";
            document.querySelector("#yourGuess").style.color = "red"
       }
    }
    numofguess--;
}