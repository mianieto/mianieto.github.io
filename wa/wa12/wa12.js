var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getCatFact);
var answerBtn = document.querySelector('#js-tweet').addEventListener('click', getDogFact);
var factEndpoint = "https://catfact.ninja/fact?max_length=100";
let current = {
    fact: "",
    dogFact: "",
};

var dogEndpoint = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";


async function getCatFact(){
    try{
        const response = await fetch(factEndpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayCat(json.fact);
        current.fact = json.fact;
    }

    catch(err){
        console.log(err);
        alert('Fail');
    }
}


async function getDogFact(){
    try{
        const dogResponse = await fetch(dogEndpoint);
        if(!dogResponse.ok){
            throw Error(dogResponse.statusText);
        }
        const dogJson = await dogResponse.json();
        displayDog(dogJson[0].fact);
        current.fact = dogJson[0].fact;
    }
}






function displayCat(quote){
    
    const catText = document.querySelector('#js-quote-text');
    catText.textContent = quote;
}

function displayDog(answer){
    const breedText = document.querySelector ('#js-answer-text');
    dogText.textContent = fact;
}

getCatFact();