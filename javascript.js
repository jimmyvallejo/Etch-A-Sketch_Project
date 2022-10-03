const container = document.querySelector(".container");
const smlbtn = document.querySelector(".small");
const medbtn = document.querySelector(".medium");
const lrgbtn = document.querySelector(".large");


function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16,16);

function clearBox (){
    container.innerHTML = "";
}


smlbtn.addEventListener('click', () => {
    clearBox();
    makeRows(16, 16);
});




medbtn.addEventListener('click', () => {
    clearBox();
    makeRows(32,32)
 });

lrgbtn.addEventListener('click', () => {
    clearBox();
    makeRows(64, 64);
})
