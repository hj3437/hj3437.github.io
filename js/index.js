const darkModeLinkTag = document.querySelector('header .dark-mode');
const darkModeIconTag = darkModeLinkTag.querySelector('.material-icons');

const colorList = ['h1', 'h2', 'h3', 'p', 'span', 'a', 'i', 'strong'];

darkModeLinkTag.addEventListener('click', () => {
    darkModeLinkTag.classList.toggle('active-dark');

    const isDarkMode = darkModeLinkTag.classList.contains('active-dark');
    if (!isDarkMode) {
        setScreenLight();
        darkModeIconTag.innerHTML = 'dark_mode'      
    } else {
        setScreenDark();
        darkModeIconTag.innerHTML = 'light_mode'              
    }    
});

function setScreenLight() {
    document.body.style.backgroundColor = 'white';
    setColorAll(colorList, 'black');
}

function setScreenDark() {
    document.body.style.backgroundColor = 'black';
    setColorAll(colorList, 'white');
}

function setColorAll(colorList, colorText) {
    colorList.forEach((tagSelector) => {
        document.querySelectorAll(`${tagSelector}`).forEach((tag) => {
            tag.style.color = colorText;
        })
    })
}