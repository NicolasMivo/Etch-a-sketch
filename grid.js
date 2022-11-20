let button1 = document.querySelector('input');
button1.addEventListener('click', () => {changeText(button1.value); });

let button2 = document.querySelector('button');
button2.addEventListener('click', () => {clearGrind(); });

let button = document.querySelector('#but');
button.addEventListener('click', () => {userInput(); });

         
const container = document.querySelector('#container') 


        
for(i = 0; i < 16; i++){
    const div1 = document.createElement('div');
    div1.classList.add('colum');
    container.appendChild(div1);
    for(g = 0; g < 16; g++){
    const div2 = document.createElement('div');
    div2.classList.add('list');
   div1.appendChild(div2);
    }
  }

  function creategrid(input){
    
    const container = document.querySelector('#container') 


        
    clearGrind();
    
    
    for(i = 0; i < input; i++){
    const div1 = document.createElement('div');
    div1.classList.add('colum');
    container.appendChild(div1);
    for(g = 0; g < input; g++){
    const div2 = document.createElement('div');
    div2.classList.add('list');
   div1.appendChild(div2);
    }
    
    }

    const div2 = document.querySelectorAll('div.list');
    for (let i = 0; i < div2.length; i++) {
      div2[i].addEventListener("click", function() {
        div2[i].classList.toggle("active");
      });

  }

}

function userInput(){
    let answer = document.querySelector('input') 
 
 creategrid(answer.value);
}

function changeText(input){
  let text = document.querySelector('.text')
  text.textContent = input;
}

function clearGrind(){
    var child = container.lastElementChild; 
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

}

const div2 = document.querySelectorAll('div.list');
/*
for (var i = 0 ; i < div3.length; i++) {
  div3[i].addEventListener('click' , () => {div3[i].classList.toggle('active')}) ; 
}
*/

for (let i = 0; i < div2.length; i++) {
  div2[i].addEventListener("click", function() {
    div2[i].classList.toggle("active");
  });
}

function changecolor(item){
    item.classList.toggle('active');
}