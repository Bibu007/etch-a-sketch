const box = document.querySelector(".box");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const grid = document.querySelector("#grid");

up.addEventListener("click", increaseGridSize);
down.addEventListener("click", decreaseGridSize);


function increaseGridSize(){
    let num = (box.innerText).split('x')
    let size = Number(num[0]);
    if(size>=16 && size<=99){
        size=size+1;
        box.textContent = `${size}x${size}`;
    }
}

function decreaseGridSize(){
    let num = (box.innerText).split('x')
    let size = Number(num[0]);
    if(size>16 && size<=100){
        size=size-1;
        box.textContent = `${size}x${size}`;
    }
}