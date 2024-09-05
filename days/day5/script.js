const shoesImg = [
    "https://imgnike-a.akamaihd.net/1920x1920/0287397TA8.jpg",
    "https://imgnike-a.akamaihd.net/1920x1920/012927IEA9.jpg",
    "https://imgnike-a.akamaihd.net/1920x1920/026608IDA8.jpg",
    "https://imgnike-a.akamaihd.net/1920x1920/0246325AA9.jpg",
    "https://imgnike-a.akamaihd.net/1920x1920/01113751A11.jpg",
    "https://imgnike-a.akamaihd.net/1920x1920/028040IDA11.jpg"
]

let currentImgIndex = 0
const maxPosition = shoesImg.length - 1
const minPosition = 0
const mainImage = document.getElementById('mainImage')
const listItens = document.getElementsByClassName('slide')
const imgList = document.getElementById("imageList")

function addElementInImgList(){
    shoesImg.map((_, index) => {
        const listElement = createListElement(index)
        imgList.appendChild(listElement)
    })
}

function createListElement(index){
    const li = document.createElement('li');
    li.innerHTML = `<img src="${shoesImg[index]}" alt="slide ${index}" />`;
    li.classList.add('slide');
    li.setAttribute('onclick', `selectImg(${index})`);

    return li;
}

function scrollCarrousel(element){
    element.scrollIntoView({behavior: "smooth"})
}

function handleClickNextButton(){
   if(currentImgIndex < maxPosition){
        currentImgIndex++
   }
   else{
    currentImgIndex = minPosition
   }

   const updatedMainImage = shoesImg[currentImgIndex]
   const currentListIten = listItens[currentImgIndex]

   selectImg(currentImgIndex)
   scrollCarrousel(currentListIten)

   mainImage.src = updatedMainImage   
   animateMainImage()
}

function handleClickPrevButton(){
    if(currentImgIndex > minPosition){
        currentImgIndex--
    }

    const updatedMainImage = shoesImg[currentImgIndex]
    const currentListIten = listItens[currentImgIndex]
    selectImg(currentImgIndex)
    scrollCarrousel(currentListIten)

    mainImage.src = updatedMainImage
    animateMainImage()
}

function selectImg(index){
    currentImgIndex = index;

    const updatedMainImage = shoesImg[currentImgIndex];
    mainImage.src = updatedMainImage;

    const imgSelected = document.getElementsByClassName('slide--selected')[0];
    if(imgSelected){
        imgSelected.classList.remove('slide--selected');
    }

    const currentListIten = listItens[currentImgIndex];
    currentListIten.classList.add('slide--selected');

    animateMainImage();
}

function animateMainImage() {
    mainImage.classList.remove('fade-in');
    
    void mainImage.offsetWidth; // reiniciar
  
    mainImage.classList.add('fade-in');
  }

addElementInImgList()

setInterval(handleClickNextButton, 2000);
