const inputImage = document.querySelector("input");
const inputImageBtn = document.querySelector(".uploadImg");
const imgView = document.querySelector(".imgView");
const range = document.querySelector(".range");
const filters = document.querySelectorAll(".filters button");
const controlFilter = document.querySelector(".controlFilter");
const saveImg = document.querySelector('.saveImg')
let activeClass;
let filterName = document.querySelector(".filterName");
// console.log(range.value)

let grayscale = 0;
let brightness = 100;
let contrast = 100;
let saturate = 100;




filters.forEach(element => {
    element.onclick=()=>{
        controlFilter.removeAttribute("hidden");
        if(document.querySelector(".filters .active")!== null){
            document.querySelector(".filters .active").classList.remove("active");
        }

        element.classList.add("active")

        filterName.innerHTML = element.innerHTML;

        if(element.id==="brightness"){
            range.value=brightness;

        }
        else if(element.id==="grayscale"){
            range.value=grayscale;

        }
        else if(element.id==="contrast"){
            range.value=contrast;

        }
        else{
            range.value=saturate;

        }


    }


});

const filterUpdate =(e)=>{
    console.log(e.target.value);
    selectedFilter = document.querySelector(".filters .active");

    if(selectedFilter.id=== "brightness"){
        brightness = e.target.value;
    }
    else if(selectedFilter.id=== "grayscale"){
        grayscale = e.target.value;
    }
    else if(selectedFilter.id=== "contrast"){
        contrast = e.target.value;
    }
    else {
        saturate = e.target.value;
    }
    applyFilter();
}

const applyFilter=()=>{
    imgView.style.filter = `brightness(${brightness}%) grayscale(${grayscale}%) contrast(${contrast}%) saturate(${saturate}%)`;

}

inputImageBtn.onclick = () => {inputImage.click();};

inputImage.onchange = () => {
    imgView.src = URL.createObjectURL(inputImage.files[0]);
  };

range.addEventListener ("input", filterUpdate) 


saveImg.onclick=()=>{
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        console.log(context);
        canvas.width = imgView.naturalWidth;
        canvas.height = imgView.naturalHeight;
    
    
        context.filter= `brightness(${brightness}%) grayscale(${grayscale}%) contrast(${contrast}%) saturate(${saturate}%)`;
        context.drawImage(imgView,0, 0, canvas.width, canvas.height);
        

        const link =document.createElement("a");
        link.download="EditedImage.jpg";
        link.href=canvas.toDataURL();
        link.click();
    
    }
    