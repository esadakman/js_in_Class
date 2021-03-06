console.log("**** Kredi Hesaplama *******");

const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const hesaplaBtn = document.querySelector(".btn");
let oran = 0;
let taksit = 0;

hesaplaBtn.addEventListener("click", (e) => {
  // ! e.prevent.default() event'in default davranışını engeller
  e.preventDefault();
  if (select.value === "Konut Kredisi") {
    oran = 1.29;
  } else if (select.value === "Ihtiyac Kredisi") {
    oran = 1.99;
  } else if (select.value === "Arac Kredisi") {
    oran = 1.79;
  }
  if (!select.value || !vade.value || !tutar.value) {
    alert(`Lütfen kredi türü, vade ve tutarı giriniz`);
  }
  const faiz = oran / 100;
  taksit =
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
    ((1 + faiz) ** vade.value - 1);
  //   console.log(taksit);
  sonuclariGöster();
});

const sonuclariGöster = () => {
  const sonuclar = document.querySelector(".sonuclar");

  sonuclar.innerHTML = `<table class="table table-bordered border-primary border-warnig mt-4 ">
<tbody>
<tr>
  <th>Kredi Miktarı</th>
  <td>${tutar.value}</td>
  <th>Kredi Tipi</th>
  <td>${select.value}</td>
</tr>
<tr>
<th>Vade</th>
<td>${vade.value}</td>
<th>Faiz Oranı Tipi</th>
<td>${oran}</td>
</tr>
<tr>
  <<th>Toplam Tutar</th>
  <td>${taksit * vade.value}</td>
  <th>Taksit Tutarı</th>
  <td>${taksit}</td>
</tr>
</tbody>


</table>`;
};
