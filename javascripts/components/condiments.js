import utilities from '../helpers/utilities.js';

const condiments = [
    {id:"condiment1", name:"ketchup", price: 50},
    {id:"condiment2", name:"mayo", price: 90},
    {id:"condiment3", name:"mustard", price: 30},
    {id:"condiment4", name:"ranch", price:75},
    {id:"condiment5", name:"siracha", price: 80},
];

const getSelectedCondiments = () => {
    const selectedCondiments = [];
    //get all condiment checkboxes
    const condimentCheckboxes = document.getElementsByClassName('condiment');
    //keep the checked ones in a new array
    for (let j = 0; j < condimentCheckboxes.length; j++){
        for (let k = 0; k < condiments.length; k++){
            if(condimentCheckboxes[j].checked && condimentCheckboxes[j].id === condiments[k].id){
                selectedCondiments.push(condiments[k]);
            }
        }
    }
    //return the new array
    return selectedCondiments;
};

const printCondimentOptions = () => {
    let domString = '';
    for (let i = 0; i < condiments.length; i++){
    domString +=  `<div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input condiment" id=${condiments[i].id}>
    <label class="custom-control-label" for=${condiments[i].id}>${condiments[i].name}</label>
    </div>
    `;
    }

    utilities.printToDom('condiment-options', domString);
};

export default { printCondimentOptions, getSelectedCondiments };