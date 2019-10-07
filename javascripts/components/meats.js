import utilities from '../helpers/utilities.js';

const meats = [
    {id:"meat1", name:"ham", price: 100},
    {id:"meat2", name:"turkey", price: 200},
    {id:"meat3", name:"roast beef", price: 400},
    {id:"meat4", name:"salami & vito", price: 300},
    {id:"meat5", name:"chicken salad", price: 100},
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
    domString +=  `<div class="custom-control custom-switch">
    <input type="radio" class="custom-control-input meat" id=${meats[i].id}>
    <label class="custom-control-label" for=${meats[i].id}>${meats[i].name}</label>
    </div>
    `;
    }

    utilities.printToDom('meat-options', domString);
};

export default { printMeatOptions, getSelectedMeats };