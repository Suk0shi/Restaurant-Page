import wipePage from '../functions/wipePage';
import loadHome from '../pages/home';
import loadMenu from './menu';
import loadContact from './contact';

const createTaskBar = function () {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('taskBar');
    content.appendChild(container);

    //home button
    const home = document.createElement('button');
    home.classList.add('home');
    home.textContent = 'Home';
    home.addEventListener('click', function(){
        wipePage();
        loadHome();
    });
    container.appendChild(home);

    //menu button
    const menu = document.createElement('button');
    menu.classList.add('menu');
    menu.textContent = 'Menu';
    menu.addEventListener('click', function(){
        wipePage();
        loadMenu();
    });
    container.appendChild(menu);

    //contact button
    const contact = document.createElement('button');
    contact.classList.add('contact');
    contact.textContent = 'Contact';
    contact.addEventListener('click', function(){
        wipePage();
        loadContact();
    });
    container.appendChild(contact);
} 

export default createTaskBar;