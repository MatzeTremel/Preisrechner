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
  (document.getElementById("sum").innerHTML =
    total.toFixed(2) + " €");
}

function orderField(preis, text) {
  document.getElementById("order").innerHTML +=
    `<p class="order" >${text} ${preis.toFixed(2)} €</p>`;
}

function orderDelete() {
  total = 0;
  document.getElementById("order").innerHTML = "";
  document.getElementById("sum").innerHTML = total.toFixed(2) + " €";
  
}

function pickedUp() {
  if (total === 0) {
    alert("Bestellung ist aktuell leer. ");
  } else {
    alert(`Bestellung abgeholt – Gesamtbetrag: ${total.toFixed(2)} €`);
    orderDelete()
  }
}

function deliveries() {
  if (total === 0) {
    alert("Bestellung ist aktuell leer. ");
  } else if (total < 20) {
    alert("Die Bestellung erreicht den Mindestbestellwert von 20 € NICHT !!!");
  } else {
    charge = 2.5;
    total += charge;
        alert(`Die Bestellung wird geliefert. Liefergebühr: 2,50 €. Gesamtbetrag: ${total.toFixed(2)} €`)
    console.log("test", total);
   orderDelete()
  }
}
