//popup
const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'

    console.log('clicou')
})

popup.addEventListener('click', event => {
    const nameElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const closePopup = classNames.some(classNames => classNames === nameElement)
    
    //console.log(nameElement)

if (closePopup){
    popup.style.display = 'none'
}
})

