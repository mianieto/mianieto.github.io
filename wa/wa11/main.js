const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg", "pic5.jpeg"];

/* Declaring the alternative text for each image file */
const altText = {
    "pic1.jpeg" : 'my cat sleeping with paws foward',
    "pic2.jpeg" : 'my cat sleeping with paws foward again',
    "pic3.jpeg" : 'my cat sleeping rolled up into a ball',
    "pic4.jpeg" : 'my cat playing with yarn with socks on his feet',
    "pic5.jpeg" : 'my cat sleeping with his face in the air'
}

/* Looping through images */

for (const i of fileNames ){
    
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/'+i);
newImage.setAttribute('alt', altText[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e =>{
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', ()=>{
    const btnClass = btn.getAttribute('class');
    if(btnClass == 'dark'){
        btn.setAttribute('class', 'light');

        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';

    }
}
);
