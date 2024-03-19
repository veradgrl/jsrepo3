const selamlamaModul = require("./selamlama");
const matematikModul = require("./islemler");
const ucgenModul = require("./ucgen");
const daireModul = require("./daire");
const kdvModul = require(".//kdv");

let sayi1 = 7;
let sayi2 = 5;
let fiyat = 500;

try {
  console.log(selamlamaModul.gunaydin("vera"));
  console.log(matematikModul.mutlak(sayi1));
  console.log(ucgenModul.dikUcgenCevre(sayi1, sayi2));
  console.log(daireModul.alan(sayi1));
  console.log(kdvModul.tip3(fiyat));
} catch (error) {
  console.log("Hata oluşt:", error.message);
}
