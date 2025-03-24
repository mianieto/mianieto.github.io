const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ["Lebron","Kyrie", "Carmelo" ];
let insertY = ["Atlas bulding","Jamba Juice", "Canes"];
let insertZ = ["died","got blown away", "turned into a zombie"];

randomize.addEventListener('click', result());

function result() {

    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':inserty:', yItem);
    var newStory = newStory.replace(':insertZ:', zItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Mia', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round((9000*0.0714))+'stone';
    const temperature =  Math.round((94-32)*(5/9))+'centigrade';
    var newStory = newStory.replace('94 fahrenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


