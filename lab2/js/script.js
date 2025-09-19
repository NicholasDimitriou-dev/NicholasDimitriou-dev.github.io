document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);
//Global variables
let randomNumber;
let attempts = 0;
let win = 0;
let lose = 0;

initializeGame();
//alert("running external JS code!")
function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";
   document.querySelector("#guessBtn").style.display = "inline";
  
   //adding focus to textbox
   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();
   playerGuess.textContent = "";
   document.querySelector("#guesses").textContent = "";
   document.querySelector("#attemptLeft").textContent = "Attempts Made: ";
   document.querySelector("#wins").textContent = "Wins: "+win;
    document.querySelector("#loses").textContent = "Loses: "+lose;
}
function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player Guess: "+ guess);
    if(guess < 1 || guess > 99){
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts:"+attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber){
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "darkgreen";
        win++;
        gameOver();
    }else{
        document.querySelector("#guesses").textContent += guess + " ";
        document.querySelector("#attemptLeft").textContent = "Attempts Made: " + attempts;
        if(attempts == 7){
            feedback.textContent = "Sorry, you lost! The random number is:"+ randomNumber;
            feedback.style.color = "red";
            lose++;
            gameOver();
        }else if(guess > randomNumber){
            feedback.textContent = "Guess was high";
        }else{
            feedback.textContent = "Guess was low";
        }
    }
}
function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}

// //document.querySelector("#reset").addEventListener("click", reset);

// //document.querySelector("#reset").style.display = "none";
// let correctGuess = Math.floor(Math.random()*99+1);
// let numofguess = 7;
// // let numGamesWon = 0;
// // let NumGamesLost = 0;
// // document.querySelector("#win").textContent += ""+numGamesWon;
// // document.querySelector("#lost").textContent += ""+NumGamesLost;

// // function reset(){
// //     document.querySelector("#answers").textContent = "";
// //     document.querySelector("#yourGuess").textContent = "";
// //     numofguess = 7;
// //     correctGuess = Math.floor(Math.random()*99+1);
// // }
// function guess(){
    
//     let userGuess = document.querySelector("#guessBox").value;
//     //alert(userGuess);
//     document.querySelector("#answers").textContent += `${userGuess} `;
//     if(numofguess > 0){
//         if(userGuess>=100){
//             alert("Error: too big a guess");
//         } 
//         if (userGuess<=0){
//             alert("error: too small a guess");
//         }
//         if (userGuess == correctGuess){
//             document.querySelector("#yourGuess").textContent = "Congrats, your guess was correct";
//             document.querySelector("#yourGuess").style.color = "#39FF14"
//             // numGamesWon++;
//             // document.querySelector("#guessBtn").style.display = "none";
//             // document.querySelector("#reset").style.display = "inline";
//         }

//         if(userGuess > correctGuess){
//             document.querySelector("#yourGuess").textContent = "Your guess was too high";
//             document.querySelector("#yourGuess").style.color = "yellow"
//         }
//         if(userGuess < correctGuess){
//             document.querySelector("#yourGuess").textContent = "Your guess was too low";
//             document.querySelector("#yourGuess").style.color = "yellow"
//         }
//     }
//     if(numofguess <= 0){
//        document.querySelector("#yourGuess").textContent = "You lose: "
//        document.querySelector("#yourGuess").textContent += correctGuess;
//        document.querySelector("#yourGuess").style.color = "red"
//         // NumGamesLost++;
//         // document.querySelector("#guessBtn").style.display = "none";
//         //  document.querySelector("#reset").style.display = "inline";
//        if(userGuess == correctGuess){
//             document.querySelector("#yourGuess").textContent = "Correct you still lost";
//             document.querySelector("#yourGuess").style.color = "red"
//        }
//     }
//     numofguess--;
// }