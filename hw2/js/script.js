document.querySelector("#wager").addEventListener("click", setWager);
document.querySelector("#roll").addEventListener("click", spinTheWheel);
let wager = 5;
let profitVal = 0;
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
    let val =  document.querySelector("#selection").value;
    if(val == "$50"){
        wager = 50;
    }else if(val == "$25"){
        wager = 25;
    }else if(val == "$10"){
        wager = 10;
    }else{
        wager = 5;
    }
    
}
function spinTheWheel(){
    reset()
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
    if(imgElement1.src == imgElement2.src && imgElement2.src == imgElement3.src){
       h2El.style.color = "limegreen";
       h2El2.style.color = "limegreen";
       h2El3.style.color = "limegreen"; 
    }else{
       h2El.style.color = "black";
       h2El2.style.color = "black";
       h2El3.style.color = "black";  
    }
    element3.append(h2El3);
    element3.append(imgElement3);
    profit() 
    
}
function profit(){
    if(imgElement1.src == imgElement2.src && imgElement2.src == imgElement3.src){
        profitVal += 5*wager
    }else{
        profitVal -= wager;
    }
    if(profitVal>0){
        let out = document.querySelector("#output");
        out.textContent = "You won " + profitVal+" dollars"
        out.style.color = "limegreen"
    }else if(profitVal== 0){
        let out = document.querySelector("#output");
        out.textContent = "You broke even"
        out.style.color = "black"
    }else{
        let out = document.querySelector("#output");
        out.textContent = "You lost " + profitVal+" dollars"
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