function selectSize(button) {
    const selectedButton = document.querySelector('.selectedSize');

    if (selectedButton) {
        selectedButton.classList.remove('selectedSize');
    }
    button.classList.add('selectedSize');
}

function setPrincipalImage(element) {
    const mainImage = document.getElementById('mainImage');
    const mainImageSrc = mainImage.src;

    const smallImage = element.querySelector('img');
    const smallImageSrc = smallImage.src;

    mainImage.src = smallImageSrc;
    smallImage.src = mainImageSrc;
}

function setPrincipalImageDefault(){
    const mainImage = document.getElementById('mainImage');
    mainImage.src= `./assets/img/sofa.jpg`
}
