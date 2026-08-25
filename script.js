const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.querySelector(".worth-first");
const swapBtn = document.getElementById("swap");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.querySelector(".worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
  if (!worthFirstEl.value) {
    worthSecondEl.value = "";
    return;
  }

  fetch(
    `https://exchangerate-api.com{CONFIG.API_KEY}/latest/${currencyFirstEl.value}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate.toFixed(4)} ${currencySecondEl.value}`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    })
    .catch(() => {
      exchangeRateEl.innerText = "Error loading exchange rates";
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);

updateRate();

swapBtn.addEventListener("click", () => {
  const temp = currencyFirstEl.value;
  currencyFirstEl.value = currencySecondEl.value;
  currencySecondEl.value = temp;
  updateRate();
});
