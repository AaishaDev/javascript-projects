let colorBox = document.querySelectorAll(".color");
let Hex = document.querySelectorAll("h4");
let result = document.getElementById('result')
let generatedColors = [];
let genHex;

const generateColor = () => {
  for (i = 0; i < 9; i++) {
    generatedColors.push("#" + Math.floor(Math.random() * 900000 + 100000));
  }
};

const allocateColor = (generatedColor) => {
  colorBox.forEach((box, index) => {
    box.style.backgroundColor = generatedColor[index];
    box.setAttribute('box-color', generatedColor[index])
  });
  genHex = generatedColors[Math.floor(Math.random() * generatedColors.length)];
  Hex[0].innerHTML=genHex;
  console.log(genHex)


  colorBox.forEach(box => {
    box.onclick = ()=>{
       
        if(genHex===box.getAttribute('box-color')){
            result.innerHTML= "Correct"

        }
        else{
            result.innerHTML= "Wrong!! Try Again"


        }
    }

    
});
};




generateColor();
allocateColor(generatedColors);
