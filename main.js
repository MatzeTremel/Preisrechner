
function inputs(preis,text) {
    console.log(preis,text)
    
}


function inputButton(elem){
    
    const preis =  Number(elem.dataset.wert);
    const text =  elem.dataset.text;
    
    inputs(preis,text)
}