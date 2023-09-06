var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var right = document.querySelector('.right');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0
function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    }
    else {
        prev.classList.remove('hide');
    }


    if (currentIndex == images.length - 1) {
        right.classList.add('hide');
    }
    else {
        right.classList.remove('hide');
    }


    gallery.classList.add('show');
    galleryImg.src = images[currentIndex].src;
    //note trong commit
}

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showGallery();
    })
})


close.addEventListener('click', () => {
    gallery.classList.remove('show');
});


document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        gallery.classList.remove('show');
    }
    if (gallery.classList.contains('show')) {
        if (event.key === "ArrowLeft") {
            if (currentIndex > 0) {
                currentIndex--;
                showGallery();
            }
        }
        else if (event.key === "ArrowRight") {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                showGallery();
            }
        }

    }

});
gallery.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        gallery.classList.remove('show');
    }
});
prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})
right.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
})

