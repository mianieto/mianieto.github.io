


const display = document.querySelector('#display');
const keys = document.querySelectorAll('.key');
const clearBtn = document.querySelector('#clear');


//Key for keys
//1:4
//2:9
//3:7
//4:0
//5:8
//6:2
//7:5
//8:1
//9:6
//0:3

// Code for number 1
document.querySelector('#one').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '4'; 
    }
  });

// Code for number 2
document.querySelector('#two').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '9'; 
    }
  });

// Code for number 3
document.querySelector('#three').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '7'; 
    }
  });

// Code for number 4
document.querySelector('#four').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '0'; 
    }
  });

// Code for number 5
document.querySelector('#five').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '8'; 
    }
  });

// Code for number 6
document.querySelector('#six').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '2'; 
    }
  });


// Code for number 7
document.querySelector('#seven').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '5'; 
    }
  });

// Code for number 8
document.querySelector('#eight').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '1';
    }
  });


// Code for number 9
document.querySelector('#nine').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '6'; 
    }
  });


// Code for number 0
document.querySelector('#zero').addEventListener('click', () => {
    if (display.textContent.length < 10) {
      display.textContent += '3';
    }
  });


clearBtn.addEventListener('click', ()=> {
    display.textContent = ''

    });

