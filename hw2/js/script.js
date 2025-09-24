document.querySelector("#wager").addEventListener("click", setWager);
document.querySelector("#roll").addEventListener("click", spinTheWheel);
let wager = 5;
let element1 = document.querySelector("#first");
let imgElement1 = document.createElement("img");
let element2 = document.querySelector("#second");
let imgElement2 = document.createElement("img");
let element3 = document.querySelector("#third");
let imgElement3 = document.createElement("img");
let h2El = document.createElement("h2");
let h2El2 = document.createElement("h2");
let h2El3 = document.createElement("h2");
function setWager(){
    wager =  document.querySelector("#selection").value;
}
function spinTheWheel(){
    reset();
    let imgs = ["cherry.jpg","lemon.jpg","star.jpg"];
    let imgName = ["cherry", "lemon", "star"];
    let arrayNum1 = Math.floor(Math.random()*3);
    imgElement1.src = imgs[arrayNum1];
    imgElement1.width = 300;  
    h2El.textContent = imgName[arrayNum1];
    element1.append(h2El);
    element1.append(imgElement1);
    let arrayNum2 = Math.floor(Math.random()*3);
    imgElement2.src = imgs[arrayNum2];
    imgElement2.width = 300; 
    h2El2.textContent = imgName[arrayNum2];
    element2.append(h2El2);
    element2.append(imgElement2);
    let arrayNum3 = Math.floor(Math.random()*3);
    imgElement3.src = imgs[arrayNum3];
    imgElement3.width = 300;
    h2El3.textContent = imgName[arrayNum3];
    element3.append(h2El3);
    element3.append(imgElement3); 
    if(arrayNum1 == arrayNum2 && arrayNum2 == arrayNum3){
        let out = document.querySelector("#output");
        out.textContent = "You won " + wager*5+" dollars"
        out.style.color = "green"
    }else{
        let out = document.querySelector("#output");
        out.textContent = "You lost " + wager+" dollars"
        out.style.color = "red"
    }
}
function reset(){
    imgElement1.src = "";
    h2El.textContent = "";
    imgElement2.src = "";
    h2El2.textContent = "";
    imgElement3.src = "";
    h2El3.textContent = "";
}