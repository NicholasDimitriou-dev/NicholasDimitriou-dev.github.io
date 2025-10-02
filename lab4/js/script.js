document.querySelector("#zip").addEventListener("change", displayZipCodeValues);
document.querySelector("#state").addEventListener("change", changeCounty);
document.querySelector("#user").addEventListener("change", usernameAva);
document.querySelector("#pass").addEventListener("click", suggestedPassword);
document.querySelector("#submit").addEventListener("click", passLength);
document.querySelector("#submit").addEventListener("click", userLength);
document.querySelector("#submit").addEventListener("click", passSame);
displayStates();
async function displayZipCodeValues(){
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip="+ zipCode;
    try{
        let response = await fetch(url);
        try{
        let data = await response.json();
        document.querySelector("#city").textContent = data.city;
        document.querySelector("#lat").textContent = data.latitude;
        document.querySelector("#long").textContent = data.longitude;
        if(!data){
            document.querySelector("#zipError").textContent = "Zip not found"
            document.querySelector("#zipError").style.color = "red";
        }
        console.log(data);
        }catch(parseError){
            console.log("JSON Parsing Error "+ parseError);
        }
    }catch(error){
        console.log("Network error "+ error);
    }
}
async function displayStates(){
    let url = "https://csumb.space/api/allStatesAPI.php";
    let optionElement = document.createElement("option");
    optionElement.textContent = "Select a state";
    document.querySelector("#state").append(optionElement);
    try{
        let response = await fetch(url);
        try{
        let data = await response.json();
        for(let i = 0; i< data.length;i++){
            let optionElement = document.createElement("option");
            optionElement.textContent = data[i].state;
            optionElement.value = data[i].usps;
            document.querySelector("#state").append(optionElement);
        }
        }catch(parseError){
            console.log("JSON Parsing Error "+ parseError);
        }
    }catch(error){
        console.log("Network error "+ error);
    }
}
async function changeCounty() {
    let state = document.querySelector("#state").value;
    let url = "https://csumb.space/api/countyListAPI.php?state="+state;
    try{
        let response = await fetch(url);
        try{
        let data = await response.json();
        document.querySelector("#county").textContent = "";
        for(let i = 0; i< data.length;i++){
            let optionElement = document.createElement("option");
            optionElement.textContent = data[i].county;
            optionElement.value = data[i].county;
            document.querySelector("#county").append(optionElement);
        }
        }catch(parseError){
            console.log("JSON Parsing Error "+ parseError);
        }
    }catch(error){
        console.log("Network error "+ error);
    }
}
async function suggestedPassword() {
    console.log("in pass")
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try{
        let response = await fetch(url);
        try{
        let data = await response.json();
        console.log(data)
        document.querySelector("#suggest").textContent = " "+data.password;
        }catch(parseError){
            console.log("JSON Parsing Error "+ parseError);
        }
    }catch(error){
        console.log("Network error "+ error);
    }
}
async function usernameAva() {
    let user = document.querySelector("#user").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username="+user;
    console.log(user);
    try{
        let response = await fetch(url);
        try{
        let data = await response.json();
        if(data.available){
             document.querySelector("#ava").textContent = "Username is available";   
             document.querySelector("#ava").style.color = "limegreen";
        }else{
            document.querySelector("#ava").textContent = "Username isn't available";
            document.querySelector("#ava").style.color = "red";
        } 
        }catch(parseError){
            console.log("JSON Parsing Error "+ parseError);
        }
    }catch(error){
        console.log("Network error "+ error);
    }
}

async function passLength(){
    let user = document.querySelector("#pass").value;
    if(user.length<6){
        document.querySelector("#error").textContent = "Error pass to short"
        document.querySelector("#error").style.color = "red";
    }else{
        document.querySelector("#error").textContent = "";
    }
}
async function userLength(){
    let user = document.querySelector("#user").value;
    if(user.length<3){
        document.querySelector("#errorTwo").textContent = "Error username too short"
        document.querySelector("#errorTwo").style.color = "red";
    }else{
        document.querySelector("#errorTwo").textContent = "";
    }
}
async function passSame(){
    let user = document.querySelector("#pass").value;
    let userRetype = document.querySelector("#password").value;
    if(user != userRetype){
        document.querySelector("#samePass").textContent = "Error different passwords"
        document.querySelector("#samePass").style.color = "red";
    }else{
        document.querySelector("#samePass").textContent = "";
    }
}

