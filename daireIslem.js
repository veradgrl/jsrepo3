let alanlar = [];
function alanHesapla(dizi) {
  for (let index = 0; index < dizi.length; index++) {
    alanlar.push(dizi[index] ** 2 * 3);
  }
  return alanlar;
}
let cevreler = [];
function cevreHesapla(dizi) {
  for (let index = 0; index < dizi.length; index++) {
    cevreler.push(dizi[index] * 2 * 3);
  }
  return cevreler;
}

module.exports = {
    alanHesapla,
    cevreHesapla
}