document.querySelector("button").addEventListener("click", gradeQuiz);

displayQ3Options();
function gradeQuiz(){
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    console.log(userAnswer1);
    let userAnswer2 = document.querySelector("#Base").value; 
    let userAnswer3 = document.querySelector("#selection").value;
    let userAnswer4 = document.querySelector("#tBx").value;
    let userAnswer5a;
    let userAnswer5b;
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
        answr1.style.color = "green"
        score += 20;
    }else{
        let answr1 = document.querySelector("#answer1")
        answr1.textContent = "Question One is incorrect"
        answr1.style.color = "red"
    }
    if(userAnswer2 == 2){
        let answr1 = document.querySelector("#answer2")
        answr1.textContent = "Question Two is correct"
        answr1.style.color = "green"
        score += 20;
    }else{
        let answr1 = document.querySelector("#answer2")
        answr1.textContent = "Question Two is incorrect"
        answr1.style.color = "red"
    }
    if(userAnswer3 == 1000){
        let answr1 = document.querySelector("#answer3")
        answr1.textContent = "Question Three is correct"
        answr1.style.color = "green"
        
        score += 20;
    }else{let answr1 = document.querySelector("#answer3")
        answr1.textContent = "Question Three is incorrect"
        answr1.style.color = "red"
    }
    if(userAnswer4 == 1011){let answr1 = document.querySelector("#answer4")
        answr1.textContent = "Question Four is correct"
        answr1.style.color = "green"
        score += 20;
    }else{
       let answr1 = document.querySelector("#answer4")
        answr1.textContent = "Question Four is incorrect"
        answr1.style.color = "red"
    }
    if(userAnswer5a == "Used in CS" && userAnswer5b == "Can be switched to any number in base 10"){
        let answr1 = document.querySelector("#answer5")
        answr1.textContent = "Question Five is correct"
        answr1.style.color = "green"
        score += 20;
    }else{
       let answr1 = document.querySelector("#answer5")
        answr1.textContent = "Question Five is incorrect"
        answr1.style.color = "red"
    }
    let answr1 = document.querySelector("#score")
        answr1.textContent = score;
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