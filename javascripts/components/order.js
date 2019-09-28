import cheese from './cheeses.js';
import meat from './meats.js';
import veggie from './veggies.js';
import bread from './breads.js';
import condiment from './condiments.js';
import utilities from '../helpers/utilities.js';


const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++){
        domString2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domString2)
}

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    const selectedMeats = meat.getSelectedMeats();
    const selectedVeggies = veggie.getSelectedVeggies();
    const selectedBreads = bread.getSelectedBreads();
    const selectedCondiments = condiment.getSelectedCondiments();
    const finalSammich = selectedCheeses.concat(selectedMeats, selectedVeggies, selectedBreads, selectedCondiments);
    createFinalOrder(finalSammich);
}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-secondary">Make Sammich</button><button id="clear-button" class="btn btn-light" value="Refresh Page" onClick="window.location.reload();">Clear Order</button>';
    utilities.printToDom('buttons', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };