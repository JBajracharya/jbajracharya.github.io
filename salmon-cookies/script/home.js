var slideIndex = 0;
changeImage();

function changeImage() {
    var i;
    var images = document.getElementsByClassName('slides');
    for(i = 0; i < images.length; i++){
        console.log(images.length);
        images[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > images.length){
        slideIndex = 1;
    }
    images[slideIndex - 1].style.display = 'block';
    setTimeout(changeImage, 4000);
}