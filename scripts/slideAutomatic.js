let index = 0

carousel()

function carousel() {
    let i;
    let slide = document.getElementsByClassName('slide');
    for (i = 0; i < slide.length; i++) {
       slide[i].style.display = "none";  
    }
    index++;
    if (index > slide.length) {index = 1}    
    slide[index-1].style.display = "block";  
    setTimeout(carousel, 5000);
}