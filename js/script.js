let size = 16;
const box = document.querySelector(".box");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const reset = document.querySelector("#reset");
const grid = document.querySelector("#grid");

up.addEventListener("mousedown", increaseGridSize);
down.addEventListener("click", decreaseGridSize);
reset.addEventListener("click", function(){gridGenerator(size)});

gridGenerator(16);

function gridGenerator(size){
    let unit=null;
    grid.replaceChildren();

    for(let i = 0; i < size; i++){
        unit = document.createElement('div');
        unit.setAttribute("style", "border: 0.0000000001em solid #dbdbdb; flex-grow: 1; display: flex");
        grid.appendChild(unit);

        for(let i = 0; i < size; i++){
            const cell = document.createElement('div');
            cell.setAttribute("style", "border: 0.000001em solid #dbdbdb; flex-grow: 1");
            unit.appendChild(cell);
            cell.addEventListener("mouseover", function(event){                       //we use anonymous function her bcz if we use callback function, then one function will be shared by all cells. Anonymous function is separate for different cells
                //console.log(String(event.target.style.backgroundColor));
                if(event.target.style.backgroundColor == ""){
                    event.target.style.backgroundColor = '#000000';
                    event.target.style.opacity = '0.1';
                }
                else{
                    console.log("hello");
                    let opacity = Number(event.target.style.opacity);        //Remember to convert such values to number
                    opacity = opacity + 0.1;
                    //console.log(`opacity: ${opacity}`);
                    event.target.style.opacity = opacity;
                }
            });
        }
    }
}


function increaseGridSize(){
    let num = (box.innerText).split('x')
    size = Number(num[0]);
    if(size>=16 && size<=99){
        size=size+1;
        box.textContent = `${size}x${size}`;
        gridGenerator(size);
    }
}

function decreaseGridSize(){
    let num = (box.innerText).split('x')
    size = Number(num[0]);
    if(size>16 && size<=100){
        size=size-1;
        box.textContent = `${size}x${size}`;
        gridGenerator(size);
    }
}