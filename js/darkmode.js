const darkModeLinkTag = document.querySelector('header .dark-mode');
const darkModeIconTag = darkModeLinkTag.querySelector('.material-icons');
const categoryTags = document.querySelectorAll('#project .content ol .history .work-category li');
const cardTags = document.querySelectorAll('#project .content ol .card');
// console.log(cardTags);

const colorList = ['h1', 'h2', 'h3', 'p', 'span', 'a', 'i', 'strong', 'li'];

darkModeLinkTag.addEventListener('click', () => {
    darkModeLinkTag.classList.toggle('active-dark');

    const isDarkMode = darkModeLinkTag.classList.contains('active-dark');
    if (!isDarkMode) {
        setScreenLight();
        darkModeIconTag.innerHTML = 'dark_mode';

        cardTags.forEach((card)=>{
            card.classList.remove('dark-card');
        });

        categoryTags[0].classList.remove('dark-category-blue')
        categoryTags[1].classList.remove('dark-category-blue')
        
        categoryTags[2].classList.remove('dark-category-pink')
        categoryTags[3].classList.remove('dark-category-pink')
        categoryTags[4].classList.remove('dark-category-pink')
        
        categoryTags[5].classList.remove('dark-category-purple')

        categoryTags[6].classList.remove('dark-category-basic')
    } else {
        setScreenDark();
        darkModeIconTag.innerHTML = 'light_mode';

        cardTags.forEach((card)=>{
            card.classList.add('dark-card');
        });
        
        categoryTags[0].classList.add('dark-category-blue')
        categoryTags[1].classList.add('dark-category-blue')
        
        categoryTags[2].classList.add('dark-category-pink')
        categoryTags[3].classList.add('dark-category-pink')
        categoryTags[4].classList.add('dark-category-pink')
        
        categoryTags[5].classList.add('dark-category-purple')

        categoryTags[6].classList.add('dark-category-basic')
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