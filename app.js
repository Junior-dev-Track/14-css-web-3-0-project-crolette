const hamburger = document.querySelector('#menu__hamburger')
const navigation = document.querySelector('#navigation')

hamburger.addEventListener('click', (e) => {
    console.log('click burger');
    navigation.classList.toggle('inactive')
})