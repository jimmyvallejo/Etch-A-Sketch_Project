const container = document.querySelector(".container");
const smlbtn = document.querySelector(".small");
const medbtn = document.querySelector(".medium");
const lrgbtn = document.querySelector(".large");
const classic = document.querySelector(".classic");
const RGB = document.querySelector(".RGB");
const wheel = document.querySelector(".wheel");
const wipe = document.querySelector(".wipe");





// Function that makes rows/cols based on for loop and applies colors to all rows/cols

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++){
        const cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor ="grey";
        });   
        
        classic.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor ="grey";
            });   
        });
        RGB.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
              cell.style.backgroundColor = randomRGB();
            });
        });
        wheel.addEventListener('input', () => {
              cell.addEventListener('mouseover', () =>{
                   cell.style.backgroundColor = wheel.value;
              });
        });
    };
};

makeRows(16,16);


// Function to get Random RGB color for RGB button

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
  }
  
  
// Function to clear colors of all cell divs;

function clearBox (){
    container.innerHTML = "";
}



// Event listiners for Grid density selection (16, 32 ,64) and Refresh button

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
});


wipe.addEventListener('click', () => {
    location.reload();
});

