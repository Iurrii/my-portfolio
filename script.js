let previewImages = document.querySelectorAll('img');
let popupFopImage = document.querySelector('.b-popup');
let popupImage = document.querySelector('.b-popup-content__img');

previewImages.forEach((element) => {
  // console.log(element);

  element.addEventListener('click', (event) => {
    popupFopImage.style.display = "block";
    // console.log(event.target.src);
    let src = event.target.src;
    popupImage.src = src;
  })
});

document.addEventListener('click', (event) => {
  if (event.target === popupFopImage) {
    popupFopImage.style.display = 'none';
  }
})