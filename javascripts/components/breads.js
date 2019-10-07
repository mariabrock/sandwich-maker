
import utilities from '../helpers/utilities.js';

const breads = [
    {id:"bread1", name:"wheat", price: 100},
    {id:"bread2", name:"cibatta", price: 200},
    {id:"bread3", name:"brioche", price: 300},
    {id:"bread4", name:"french", price: 100},
    {id:"bread5", name:"lettuce", price: 50},
];

const getSelectedBreads = () => {
    const selectedBreads = [];
    //get all bread checkboxes
    const breadCheckboxes = document.getElementsByClassName('bread');
    //keep the checked ones in a new array
    for (let j = 0; j < breadCheckboxes.length; j++){
        for (let k = 0; k < breads.length; k++){
            if(breadCheckboxes[j].checked && breadCheckboxes[j].id === breads[k].id){
                selectedBreads.push(breads[k]);
            }
        }
    }
    //return the new array
    return selectedBreads;
};

const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++){
    domString +=  `<div class="custom-control custom-switch">
    <input type="radio" name="breads" class="custom-control-input bread" id=${breads[i].id}>
    <label class="custom-control-label" for=${breads[i].id}>${breads[i].name}</label>
  </div>
    `;
    }

    utilities.printToDom('bread-options', domString);
};

export default { printBreadOptions, getSelectedBreads };