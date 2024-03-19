// let kelime = ["niçin", "neden", "kazak", "küllük"];

// let secilikelime = 3;
let ilkvesonharf = [];
// let iknci = []

// if (kelime[secilikelime].length % 2 === 0) {
//   for (let index = 0; index < kelime[secilikelime].length; index = index + (kelime[secilikelime].length - 1)) {
//         ilkvesonharf.push(kelime[secilikelime][index])
//   }
//   console.log(ilkvesonharf);
// if (ilkvesonharf[0] === ilkvesonharf[1]) {
//     console.log("true");
//     for (let index = 1; index < 5; index = kelime[secilikelime].length - 2) {
//         iknci.push(kelime[secilikelime][index])
//     }
//     console.log(iknci);
//   }}
//  else {
//   for (let index = 0; index < kelime[secilikelime].length; index++) {}
// }

let kelime = ["elle", "niçin", "neden", "kazak", "küllük"];
let secilikelime = 0;

//-------------------------------------------------------------------------------
for (let index = 0; index < kelime[secilikelime].length; index++) {
  ilkvesonharf.push(kelime[secilikelime][index]);
}
console.log(ilkvesonharf);
console.log(ilkvesonharf.length);
if (ilkvesonharf[0] === ilkvesonharf[ilkvesonharf.length - 1]) {
  console.log(ilkvesonharf[0], "=", ilkvesonharf[ilkvesonharf.length - 1]);
}
else {
  console.log(ilkvesonharf[0], "≠", ilkvesonharf[ilkvesonharf.length - 1]);
  console.log("bu bir polindrom kelime değil");
}  {
if (ilkvesonharf[1] === ilkvesonharf[ilkvesonharf.length - 2]) {
  console.log(ilkvesonharf[1], "=", ilkvesonharf[ilkvesonharf.length - 2]);
} else {
  console.log(ilkvesonharf[1], "≠", ilkvesonharf[ilkvesonharf.length - 2]);
  console.log("bu bir polindrom kelime değil");
} 
{
if (ilkvesonharf[2] === ilkvesonharf[ilkvesonharf.length - 3]) {
  console.log(ilkvesonharf[2], "=", ilkvesonharf[ilkvesonharf.length - 3]);
} else {
  console.log(ilkvesonharf[2], "≠", ilkvesonharf[ilkvesonharf.length - 3]);
  console.log("bu bir polindrom kelime değil");
}}
}

console.log(harfNotlari);
console.log("--------------------");
console.log("AA", sayacAA, "CC", sayacCC, "DC", sayacDC, "FF", sayacFF);
sayaclar.push(sayacAA, sayacCC, sayacDC, sayacFF);
sayaclar.sort((a, b) => a - b);
sayaclar = sayaclar.reverse();
if (
  sayacFF >= harfNotlari.length / 3 &&
  sayacFF === sayaclar[0]
) {
  console.log("--------------------");
  console.log("Ders başarımı çok kötü");
  console.log("FF alanların sayısı:", sayacFF);
} else if (
  sayacAA >= harfNotlari.length / 3 &&
  sayacAA === sayaclar[0]
) {
  console.log("--------------------");
  console.log("Ders başarımı çok iyi");
  console.log("AA alanların sayısı:", sayacAA);
} else if (
  sayacCC >= harfNotlari.length / 3 &&
  sayacCC === sayaclar[0]
) {
  console.log("--------------------");
  console.log("Ders başarımı orta");
  console.log("CC alanların sayısı:", sayacCC);
} else if (
  sayacDC >= harfNotlari.length / 3 &&
  sayacDC === sayaclar[0]
) {
  console.log("--------------------");
  console.log("Ders başarımı kötü");
  console.log("DC alanların sayısı:", sayacDC);
}

