document.addEventListener('DOMContentLoaded', (event) => {
    let count = 1
    let maxSlider = document.querySelectorAll('.slide').length
    let slider = document.querySelector('.slide')

    function action() {
        setInterval(function() {
            slider[count].style.display = 'none';
            count++
            if(count > maxSlider) {
                count = 1
            }
            slider[count].style.display = 'block'
        }, 3000)
    }

    action()
})