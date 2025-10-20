let myImgs = ["Image1.jpg",
    "Image2.jpg",
    "Image3.jpg",
    "Image4.jpg",
    "Image5.jpg",
    "Image6.jpg",
    "Image7.jpg",
    "Image8.jpg",
    "Image9.jpg",
    "Image10.jpg"];

function openOverlay(index) {
    let refOverlay = document.getElementById("overlay");
    let hideScrollbar = document.getElementById("body-scrollbar");
    hideScrollbar.classList.add("hide-scrollbar");
    refOverlay.classList.remove("d-none");
    refOverlay.innerHTML = getContentTemplate(index);

}

function getContentTemplate(index) {
    return `<div onclick="event.stopPropagation()" class="dialog">
                <div>
                    <div class="x-close">
                        <div onclick="closeOverlay()" class="nav-button-close">
                            <img src="./img/buttons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <div id="img-pop-up" class="img-pop-up">
                        <img src="./img/${myImgs[index]}" alt="Image${index + 1}">
                    </div>
                </div>
                <div class="button-cont">
                    <div>
                        <div class="nav-button" id="prevbtn">
                            <img onclick="prevImage(${index})" src="./img/buttons/chevron_left_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                        </div>
                    </div>
                    <p id="p-tag">${index + 1}/${myImgs.length}</p>
                    <div>
                        <div class="nav-button" id="nextbtn">
                            <img onclick="nextImage(${index})" src="./img/buttons/chevron_right_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>`;
}

function closeOverlay() {
    let closeOverlay = document.getElementById("overlay");
    let hideScrollbar = document.getElementById("body-scrollbar");
    hideScrollbar.classList.remove("hide-scrollbar");
    closeOverlay.classList.add("d-none");
}

function prevImage(index) {
    if (index === 0) {
        index = myImgs.length;
    }
    index -= 1;
    currentImage(index);
}

function nextImage(index) {
    if (index === myImgs.length - 1) {
        index = -1;
    }
    index += 1;
    currentImage(index);
}

function currentImage(index) {
    let currentImage = document.getElementById("overlay");
    currentImage.innerHTML = getContentTemplate(index);
}


