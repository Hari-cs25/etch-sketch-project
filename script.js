const containerDiv= document.querySelector('.container');
const researchButton = document.querySelector('.button1');
const eraseButton = document.querySelector('.button2');
const rgbButton = document.querySelector('.button3');
const darkButton = document.querySelector('.button4');
let defaultDivCount=16;
let i2;
let tempMeasure;
let userInput=defaultDivCount;

darkButton.addEventListener('click' , colorSwitchDefault);
function colorSwitchDefault(){
  const gridDivs = document.querySelectorAll('.gridDiv');
  gridDivs.forEach(revainder);
  function revainder(div){
      div.addEventListener('mouseover' , ()=> (div.style.background = 'gray'))
  }
}

rgbButton.addEventListener('click' , revaind);
function revaind(){
  const gridDiv = document.querySelectorAll('.gridDiv');
gridDiv.forEach((div)=>{
  div.addEventListener('mouseover' , ()=>(div.style.background = getRandomColor()));
})
}

function getRandomColor() {
 const r = Math.floor(Math.random() * 256);
 const g = Math.floor(Math.random() * 256);
 const b = Math.floor(Math.random() * 256);
 return `rgb(${r}, ${g}, ${b})`;
}

function erase(){
    containerDiv.innerHTML = '';
    tempMeasure = 500 / userInput;
    for (i2 = 1; i2 <= (userInput * userInput); ++i2) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        gridDiv.setAttribute('style', 'background-color:white;');
        gridDiv.style.width = `${tempMeasure}px`;
        gridDiv.style.height = `${tempMeasure}px`;
        containerDiv.appendChild(gridDiv);
        gridDiv.addEventListener('mouseover', () => (gridDiv.style.background = 'gray'));
        gridDiv.style.border = '0.5px solid  rgb(102, 102, 102)';

      }
}


eraseButton.addEventListener('click' , erase );
researchButton.addEventListener('click' , recreate)

function recreate(){
    userInput = prompt('  Enter the size of sketchpad you want below 👇');
    
    if(userInput >=100){
      alert(' Out of limit Try smaller !')
      return;
    }
    containerDiv.innerHTML = '';
    tempMeasure=500/userInput;

     for( i2=1 ; i2<=(userInput*userInput) ; ++i2){
        const gridDiv = document.createElement('div');
         gridDiv.classList.add('gridDiv');
         gridDiv.setAttribute('style' , 'background-color:white;');
         gridDiv.style.width =`${tempMeasure}px`;
         gridDiv.style.height = `${tempMeasure}px`;
         containerDiv.appendChild(gridDiv);
         gridDiv.addEventListener('mouseover' , ()=>(gridDiv.style.background='gray'));
         gridDiv.style.border = '0.5px solid  rgb(102, 102, 102)';

     }
     console.log('number of div grids:',i2);
}

tempMeasure=500/defaultDivCount;

for(let i=1 ; i<=(defaultDivCount*defaultDivCount) ; ++i){
       const gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
       //gridDiv.setAttribute('style' , 'box-sizing:border-box;');
        //gridDiv.textContent=i;
        gridDiv.setAttribute('style' , 'background-color:white;');
         containerDiv.appendChild(gridDiv);
         gridDiv.style.width = `${tempMeasure}px`;
         gridDiv.style.height = `${tempMeasure}px`;
                 gridDiv.style.border = '0.5px solid  rgb(102, 102, 102)';

         gridDiv.addEventListener('mouseover' , ()=>(gridDiv.style.background= 'gray') );
}