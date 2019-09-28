console.log("Definately not Jimmy John's");

import bread from './components/bread.js';
import meat from './components/meat.js';
import cheese from './components/cheese.js';
import veggie from './components/veggie.js';
import condiment from './components/condiment.js';
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