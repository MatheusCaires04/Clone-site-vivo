let currentSlide = 0
let totalSlide = document.querySelectorAll('.images--slide')
let widthScreen = document.querySelector('.images--slide').clientWidth

function updateMargin() {
    currentSlide++
    if(currentSlide > (totalSlide - 1)) {
        currentSlide = 0
    }
    let newMargin = (currentSlide * widthScreen)
    document.querySelector('.images--slide').style.marginLeft = `
        -${newMargin}px
    `
}

setInterval(updateMargin, 3000)