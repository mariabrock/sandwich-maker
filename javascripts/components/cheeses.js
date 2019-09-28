import utilities from '../helpers/utilities.js';

const cheeses = [
    {id:"cheese1", name:"swiss", price: 50},
    {id:"cheese2", name:"american", price: 90},
    {id:"cheese3", name:"gorgonzola", price: 500},
    {id:"cheese4", name:"pepper jack", price: 0},
    {id:"cheese5", name:"provolone", price: 80},
];

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    //get all cheese checkboxes
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    //keep the checked ones in a new array
    for (let j = 0; j < cheeseCheckboxes.length; j++){
        for (let k = 0; k < cheeses.length; k++){
            if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id){
                selectedCheeses.push(cheeses[k]);
            }
        }
    }
    //return the new array
    return selectedCheeses;
};

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++){
    domString +=  `<div class="custom-control custom-switch">
    <input type="radio" name="cheeses" class="custom-control-input bread" id=${cheeses[i].id}>
    <label class="custom-control-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
  </div>
    `;
    }

    utilities.printToDom('cheese-options', domString);
};

export default { printCheeseOptions, getSelectedCheeses };