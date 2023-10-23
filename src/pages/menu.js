const loadMenu = function() {
    const container = document.querySelector('.pageContent');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPage');
    container.appendChild(menuPage);

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'Menu';
    menuPage.appendChild(menuTitle);

    const food = document.createElement('h3');
    food.classList.add('food');
    food.textContent = 'Food';
    menuPage.appendChild(food);

    const taco = document.createElement('p');
    taco.classList.add('taco');
    taco.textContent = 'taco';
    menuPage.appendChild(taco);

    const tacoPrice = document.createElement('p');
    tacoPrice.classList.add('tacoPrice');
    tacoPrice.textContent = '£8.00';
    menuPage.appendChild(tacoPrice);

    const smallBurrito = document.createElement('p');
    smallBurrito.classList.add('smallBurrito');
    smallBurrito.textContent = 'small buritto';
    menuPage.appendChild(smallBurrito);

    const smallBurritoPrice = document.createElement('p');
    smallBurritoPrice.classList.add('smallBurritoPrice');
    smallBurritoPrice.textContent = '£7.00';
    menuPage.appendChild(smallBurritoPrice);

    const burrito = document.createElement('p');
    burrito.classList.add('burrito');
    burrito.textContent = 'buritto';
    menuPage.appendChild(burrito);

    const burritoPrice = document.createElement('p');
    burritoPrice.classList.add('burritoPrice');
    burritoPrice.textContent = '£8.00';
    menuPage.appendChild(burritoPrice);

    const bowlRito = document.createElement('p');
    bowlRito.classList.add('bowlRito');
    bowlRito.textContent = 'bowl-rito';
    menuPage.appendChild(bowlRito);

    const bowlRitoPrice = document.createElement('p');
    bowlRitoPrice.classList.add('bowlRitoPrice');
    bowlRitoPrice.textContent = '£8.00';
    menuPage.appendChild(bowlRitoPrice);

    const tostadaBowl = document.createElement('p');
    tostadaBowl.classList.add('tostadaBowl');
    tostadaBowl.textContent = 'tostada bowl';
    menuPage.appendChild(tostadaBowl);

    const tostadaBowlPrice = document.createElement('p');
    tostadaBowlPrice.classList.add('tostadaBowlPrice');
    tostadaBowlPrice.textContent = '£6.00';
    menuPage.appendChild(tostadaBowlPrice);

    const chronicSalad = document.createElement('p');
    chronicSalad.classList.add('chronicSalad');
    chronicSalad.textContent = 'chronic salad';
    menuPage.appendChild(chronicSalad);

    const chronicSaladPrice = document.createElement('p');
    chronicSaladPrice.classList.add('chronicSaladPrice');
    chronicSaladPrice.textContent = '£8.00';
    menuPage.appendChild(chronicSaladPrice);

    const quesadilla = document.createElement('p');
    quesadilla.classList.add('quesadilla');
    quesadilla.textContent = 'quesadilla';
    menuPage.appendChild(quesadilla);

    const quesadillaPrice = document.createElement('p');
    quesadillaPrice.classList.add('quesadillaPrice');
    quesadillaPrice.textContent = '£7.00';
    menuPage.appendChild(quesadillaPrice);

    const torta = document.createElement('p');
    torta.classList.add('torta');
    torta.textContent = 'torta (includes chips)';
    menuPage.appendChild(torta);

    const tortaPrice = document.createElement('p');
    tortaPrice.classList.add('tortaPrice');
    tortaPrice.textContent = '£8.00';
    menuPage.appendChild(tortaPrice);

    const drink = document.createElement('h3');
    drink.classList.add('drink');
    drink.textContent = 'Drink';
    menuPage.appendChild(drink);

    const icedTea = document.createElement('p');
    icedTea.classList.add('icedTea');
    icedTea.textContent = 'iced tea';
    menuPage.appendChild(icedTea);

    const icedTeaPrice = document.createElement('p');
    icedTeaPrice.classList.add('icedTeaPrice');
    icedTeaPrice.textContent = '£3.00';
    menuPage.appendChild(icedTeaPrice);

    const fountainSoda = document.createElement('p');
    fountainSoda.classList.add('fountainSoda');
    fountainSoda.textContent = 'fountain soda';
    menuPage.appendChild(fountainSoda);

    const fountainSodaPrice = document.createElement('p');
    fountainSodaPrice.classList.add('fountainSodaPrice');
    fountainSodaPrice.textContent = '£5.00';
    menuPage.appendChild(fountainSodaPrice);

    const hotCoffee = document.createElement('p');
    hotCoffee.classList.add('hotCoffee');
    hotCoffee.textContent = 'hot coffee';
    menuPage.appendChild(hotCoffee);

    const hotCoffeePrice = document.createElement('p');
    hotCoffeePrice.classList.add('hotCoffeePrice');
    hotCoffeePrice.textContent = '£3.00';
    menuPage.appendChild(hotCoffeePrice);

    const hotChocolate = document.createElement('p');
    hotChocolate.classList.add('hotChocolate');
    hotChocolate.textContent = 'hot chocolate';
    menuPage.appendChild(hotChocolate);

    const hotChocolatePrice = document.createElement('p');
    hotChocolatePrice.classList.add('hotChocolatePrice');
    hotChocolatePrice.textContent = '£5.00';
    menuPage.appendChild(hotChocolatePrice);

    const fruitJuice = document.createElement('p');
    fruitJuice.classList.add('fruitJuice');
    fruitJuice.textContent = 'fruit juice';
    menuPage.appendChild(fruitJuice);

    const fruitJuicePrice = document.createElement('p');
    fruitJuicePrice.classList.add('fruitJuicePrice');
    fruitJuicePrice.textContent = '£5.00';
    menuPage.appendChild(fruitJuicePrice);

    const appleJuice = document.createElement('p');
    appleJuice.classList.add('appleJuice');
    appleJuice.textContent = 'apple juice';
    menuPage.appendChild(appleJuice);

    const appleJuicePrice = document.createElement('p');
    appleJuicePrice.classList.add('appleJuicePrice');
    appleJuicePrice.textContent = '£4.00';
    menuPage.appendChild(appleJuicePrice);
}

export default loadMenu;