const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

export default { printToDom };