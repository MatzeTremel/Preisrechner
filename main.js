let total = 0;

function inputs(preis, text) {
  console.log(preis, text);

  total += preis;
  orderField(preis, text);
  addUp();
  
}

function inputButton(elem) {
  const preis = Number(elem.dataset.wert);
  const text = elem.dataset.text;

  inputs(preis, text);
}

function addUp() {
  let toAddUp = (document.getElementById("sum").innerHTML =
    total.toFixed(2) + " €");
  console.log("test", toAddUp);
}

function orderField(preis, text) {
  let toOrder = (document.getElementById("order").innerHTML +=
    text + " " + preis.toFixed(2) + ' €<br><br><div class="order"><div>');
}


