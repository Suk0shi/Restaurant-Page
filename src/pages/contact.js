import Logo from '../images/contactImage.png'

const loadContact = function() {
    const container = document.querySelector('.pageContent');

    const contactPage = document.createElement('div');
    contactPage.classList.add('contactPage');
    container.appendChild(contactPage);

    const contactPageTitle = document.createElement('h1');
    contactPageTitle.classList.add('contactPageTitle');
    contactPageTitle.textContent = 'Contact Us';
    contactPage.appendChild(contactPageTitle);

    const contactImg = document.createElement('img');
    contactImg.classList.add('contactImg');
    contactImg.src = Logo;
    contactPage.appendChild(contactImg);

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'Email: hello@grab-tacos.com';
    contactPage.appendChild(email);

    const tellephoneNum = document.createElement('p');
    tellephoneNum.classList.add('tellephoneNum');
    tellephoneNum.textContent = 'Call at: 123-456-7890';
    contactPage.appendChild(tellephoneNum);

    const instagram = document.createElement('p');
    instagram.classList.add('instagram');
    instagram.textContent = 'Instagram: @grab-tacos';
    contactPage.appendChild(instagram);
}

export default loadContact;