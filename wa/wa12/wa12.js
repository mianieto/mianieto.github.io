var catBtn = document.querySelector('#js-cat').addEventListener('click', getFactCat);
var dogBtn = document.querySelector('#js-dog').addEventListener('click', getFactDog);
var nameBtn = document.querySelector('#js-name').addEventListener('click', getName);
var endpointCat = "https://catfact.ninja/fact?max_length=100";
var endpointDog = "https://dogapi.dog/api/v2/facts?limit=1";

var endpointName = "https://randomuser.me/api?nat=US"



let currentCat = {
    fact: "",

};

let currentDog ={
    fact:"",
    
}

let currentName = {
    name: "",
}


async function getFactCat(){
    try{
        const response = await fetch(endpointCat);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayCatFact(json.fact);
        currentCat.fact = json.fact;
    }
    catch(err){
        console.log(err);
        alert('Failed to get cat fact');
    }
}

async function getFactDog(){
    try{
        const responseDog = await fetch(endpointDog);
        if(!responseDog.ok){
            throw Error(responseDog.statusText);
        }
        const json = await responseDog.json();
        const fact = json.data[0].attributes.body
        displayDogFact(fact);
        currentDog.fact = fact;
    }
    catch(err){
        console.log(err);
        alert('Failed to get dog fact');
    }
}

async function getName(){
    try{
        const responseName = await fetch(endpointName);
        if(!responseName.ok){
            throw Error(responseName.statusText);
        }
        const json = await responseName.json();
        displayName(json.results[0].name.first);
        currentName.name = json.results[0].name.first;
    }
    catch(err){
        console.log(err);
        alert('Failed to get name');
    }
}









function displayCatFact(catFact){
    const catText = document.querySelector('#js-cat-text');
    catText.textContent = catFact;
}

function displayDogFact(dogFact){
    const dogText = document.querySelector ('#js-dog-text');
    dogText.textContent = dogFact;
}

function displayName(name){
    const nameText = document.querySelector ('#js-name-text');
    nameText.textContent = name;
}


getFactCat();
getFactDog();
getName();

