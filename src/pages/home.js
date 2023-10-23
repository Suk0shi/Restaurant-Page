import Logo from '../images/tacoLogo.png'

const loadHome = function() {
    const container = document.querySelector('.pageContent');

    const homePage = document.createElement('div');
    homePage.classList.add('homePage');
    container.appendChild(homePage);

    //title
    const homePageTitle = document.createElement('h1');
    homePageTitle.classList.add('homePageTitle');
    homePageTitle.textContent = 'Grab Tacos';
    homePage.appendChild(homePageTitle);

    //logo
    const tacoLogo = document.createElement('img');
    tacoLogo.classList.add('tacoLogo');
    tacoLogo.src = Logo;
    homePage.appendChild(tacoLogo);

    //open hours 
    const openHours = document.createElement('p');
    openHours.classList.add('openHours');
    openHours.textContent = 'Open 08:00 - 22:00';
    homePage.appendChild(openHours);

    //location
    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = 'North Park Street No. 17F';
    homePage.appendChild(location);
}

export default loadHome;