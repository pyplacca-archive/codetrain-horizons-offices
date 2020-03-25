// carousel functionality
let scheduleId
const carousel = document.querySelector('.carousel')
const [indicators, images] = Array('.indicators', '.images').map(
    class_name => carousel.querySelector(class_name)
)

function resetCarouselTimer () {
    if (scheduleId) {
        clearInterval(scheduleId)
    }
    scheduleId = setInterval( 
        switchImage, 6500, 'next' 
    )
}

function switchImage(id) {
    if (typeof id !== 'number') {
        let temp = Number.parseInt(
            indicators.querySelector('.active').id
        ) - 1
        const length = indicators.children.length
    
        temp += (id === 'next') ? 1 : -1
        id = (temp > length-1) ? 0 : (temp < 0) ? length-1 : temp
    }
    
    Array(...carousel.getElementsByClassName('active')).forEach(
        elem => elem.classList.toggle('active')
    );

    indicators.children[id].classList.toggle('active')
    images.children[id].classList.toggle('active')
    
    delete temp, length
    resetCarouselTimer()
}

Array(['#left-arrow', 'previous'], ['#right-arrow', 'next']).forEach(
    arg => document.querySelector(arg[0]).addEventListener(
        'click', () => switchImage(arg[1])
    )
)

Array(...indicators.children).forEach(
    child => { child.addEventListener(
        'click', () => switchImage(child.id-1)
    )}
)

delete carousel
resetCarouselTimer()
