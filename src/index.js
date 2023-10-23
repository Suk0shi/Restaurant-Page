import './styles/taskBar.css'
import './styles/home.css'
import './styles/menu.css'
import './styles/contact.css'
import createTaskBar from './pages/createTaskBar';
import loadHome from './pages/home';

createTaskBar();

const container = document.querySelector('#content');
const pageContent = document.createElement('div');
pageContent.classList.add('pageContent');
container.appendChild(pageContent);
    
loadHome();
