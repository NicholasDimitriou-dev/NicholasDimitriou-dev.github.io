document.querySelector("button").addEventListener("click", gradeQuiz);
let Onec = document.getElementById("img1c");
let Onew = document.getElementById("img1w");
let Twoc = document.getElementById("img2c");
let Twow = document.getElementById("img2w");
let Threec = document.getElementById("img3c");
let Threew = document.getElementById("img3w");
let Fourc = document.getElementById("img4c");
let Fourw = document.getElementById("img4w");
let Fivec = document.getElementById("img5c");
let Fivew = document.getElementById("img5w");
let dateTime = new Date();
let hr = dateTime.getHours();
let min = dateTime.getMinutes();
let sec = dateTime.getSeconds();
localStorage.setItem("hr", hr);
localStorage.setItem("min", min);
localStorage.setItem("sec", sec);



displayQ3Options();
function gradeQuiz(){
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    console.log(userAnswer1);
    let userAnswer2 = document.querySelector("#Base").value; 
    let userAnswer3 = document.querySelector("#selection").value;
    let userAnswer4 = document.querySelector("#tBx").value;
    let userAnswer5a;
    let userAnswer5b;
    let date = new Date();
    let nhr = date.getHours();
    let nmin = date.getMinutes();
    let nsec = date.getSeconds();
    localStorage.getItem("hr");
    localStorage.getItem("min");
    localStorage.getItem("sec");

    let total = document.querySelector("#totalTime");
    let chr = localStorage.getItem("hr");
    let cmin = localStorage.getItem("min");
    let csec = localStorage.getItem("sec");
    let totalhr = nhr - chr; 
    let totalmin = nmin - cmin;
    let totalsec = nsec - csec;
    total.textContent += totalhr + "hrs " + totalmin + "mins "+totalsec+"secs";

    if (document.querySelector("#q4a").checked) {
        userAnswer5a = document.querySelector("#q4a").value;
    }
    if (document.querySelector("#q4c").checked) {
        userAnswer5b = document.querySelector("#q4c").value;
    }
    let score = 0;
    if(userAnswer1 == 8){
        let answr1 = document.querySelector("#answer1")
        answr1.textContent = "Question One is correct"
        answr1.style.color = "rgb(0, 255, 0)"
        Onec.removeAttribute("hidden");

        score += 20;
    }else{
        let answr1 = document.querySelector("#answer1")
        answr1.textContent = "Question One is incorrect"
        answr1.style.color = "red"
        Onew.removeAttribute("hidden")
    }
    if(userAnswer2 == 2){
        let answr1 = document.querySelector("#answer2")
        answr1.textContent = "Question Two is correct"
        answr1.style.color = "rgb(0, 255, 0)"
        Twoc.removeAttribute("hidden");
        score += 20;
    }else{
        let answr1 = document.querySelector("#answer2")
        answr1.textContent = "Question Two is incorrect"
        answr1.style.color = "red"
        Twow.removeAttribute("hidden");
    }
    if(userAnswer3 == 1000){
        let answr1 = document.querySelector("#answer3")
        answr1.textContent = "Question Three is correct"
        answr1.style.color = "rgb(0, 255, 0)"
        Threec.removeAttribute("hidden");
        
        score += 20;
    }else{let answr1 = document.querySelector("#answer3")
        answr1.textContent = "Question Three is incorrect"
        answr1.style.color = "red"
        Threew.removeAttribute("hidden");
    }
    if(userAnswer4 == 1011){let answr1 = document.querySelector("#answer4")
        answr1.textContent = "Question Four is correct"
        answr1.style.color = "rgb(0, 255, 0)"
        Fourc.removeAttribute("hidden");
        
        score += 20;
    }else{
       let answr1 = document.querySelector("#answer4")
        answr1.textContent = "Question Four is incorrect"
        answr1.style.color = "red"
        Fourw.removeAttribute("hidden");
    }
    if(userAnswer5a == "Used in CS" && userAnswer5b == "Can be switched to any number in base 10"){
        let answr1 = document.querySelector("#answer5")
        answr1.textContent = "Question Five is correct"
        answr1.style.color = "rgb(0, 255, 0)"
        Fivec.removeAttribute("hidden");
        score += 20;
    }else{
       let answr1 = document.querySelector("#answer5")
        answr1.textContent = "Question Five is incorrect"
        answr1.style.color = "red"
        Fivew.removeAttribute("hidden");
    }
    let answr1 = document.querySelector("#score")
        answr1.textContent +=" "+ score;
    if(score >= 80){
        congrats.textContent += "Congrats on the great score";
        congrats.style.color = "green";
    }
}

function displayQ3Options(){
    let q3Options = ["1", "3", "6", "8"];
    q3Options = _.shuffle(q3Options);
    for (let i of q3Options) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;
        console.log(inputElement);
        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);
        document.querySelector("#q3Options").append(labelElement);   
    }
}