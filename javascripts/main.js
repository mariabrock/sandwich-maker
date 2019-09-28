console.log("Definately not Jimmy John's");

import bread from './components/breads.js';
import meat from './components/meats.js';
import cheese from './components/cheeses.js';
import veggie from './components/veggies.js';
import condiment from './components/condiments.js';
import order from './components/order.js';

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    veggie.printVeggieOptions();
    condiment.printCondimentOptions();
    order.printOrderButton();
};

init()