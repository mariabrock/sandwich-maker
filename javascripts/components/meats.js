import utilities from '../helpers/utilities.js';

const meats = [
    {id:"meat1", name:"ham", price: 100},
    {id:"meat2", name:"turkey", price: 90},
    {id:"meat3", name:"roast beef", price: 80},
    {id:"meat4", name:"bologna", price: 85},
    {id:"meat5", name:"chicken", price: 100},
];

const getSelectedMeats = () => {
    const selectedMeats = [];
    //get all meat checkboxes
    const meatCheckboxes = document.getElementsByClassName('meat');
    //keep the checked ones in a new array
    for (let j = 0; j < meatCheckboxes.length; j++){
        for (let k = 0; k < meats.length; k++){
            if(meatCheckboxes[j].checked && meatCheckboxes[j].id === meats[k].id){
                selectedMeats.push(meats[k]);
            }
        }
    }
    //return the new array
    return selectedMeats;
};

const printMeatOptions = () => {
    let domString = '';
    for (let i = 0; i < meats.length; i++){
    domString +=  `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input meat" id=${meats[i].id}>
    <label class="form-check-label" for=${meats[i].id}>${meats[i].name}</label>
    </div>
    `;
    }

    utilities.printToDom('meat-options', domString);
};

export default { printMeatOptions, getSelectedMeats };