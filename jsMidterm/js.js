const display = document.querySelector('#display');
const keys = document.querySelectorAll('.key');
const clearBtn = document.querySelector('#clear');


keys.forEach(key => {
  key.addEventListener('click', () => {
    if(display.textContent.length < 10){
        display.textContent += key.textContent;

    };
  });
});


clearBtn.addEventListener('click', ()=> {
    display.textContent = ''

    });

