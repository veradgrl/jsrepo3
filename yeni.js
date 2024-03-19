let meyveler = ["Elma", "Portakal", "Kivi", "Çilek", "Karpuz"];
// let sayilar = [1, 2, 3, 4, 5, 6, 7];
// let kullanicilar = [
//   {
//     isim: "John",
//     soyisim: "Doe",
//     yas: 32,
//     firma: {
//       isim: "Açık Atölye",
//       adres: {
//         il: "Bursa",
//         ilce: "Yıldırım",
//       },
//     },
//     adres: {
//       il: "İzmir",
//       ilce: "Buca",
//     },
//   },
//   {
//     isim: "Angel",
//     soyisim: "Doe",
//     yas: 30,
//     firma: {
//       isim: "Açık Atölye",
//       adres: {
//         il: "Bursa",
//         ilce: "Nilüfer",
//       },
//     },
//     adres: {
//       il: "İzmir",
//       ilce: "Buca",
//     },
//   },
// ];

// console.log("meyveler", meyveler);
// console.log(meyveler[1]);

// let uzunlukMeyveler = meyveler.length;
// let uzunlukSayilar = sayilar.length;
//console.log(uzunlukSayilar);

// let dizi1 = [1, 2, 3, 4, ["Elma", "Çilek", "Karpuz"], 5, [1, 2, 3]];

// console.log(kullanicilar[1]);
// meyveler.push("1,2");
//  console.log(meyveler);

//puan < 60 ? console.log("Kaldın") : console.log("Geçtin");

let kelimeler = [
  "YAPAY",
  "KAZAK",
  "BARDAK",
  "NEDEN",
  "NICIN",
  "KUCUK",
  "KEK",
  "KUTU",
  "MEYVE",
  "MASA",
  "KITAP",
  "ADA",
  "MUM",
  "LIMON",
];

let palindromKelimeler = [];
let normalKelimeler = [];

for (let index = 0; index < kelimeler.length; index++) {
  let element = kelimeler[index];
  let temp = element.split("");
  let x = temp.join("");
  let xR = temp.reverse().join("");
  if (x === xR) {
    palindromKelimeler.push(x);
  } else {
    normalKelimeler.push(x);
  }
}

console.log(palindromKelimeler);
console.log(normalKelimeler);

let sayilar = [101, 205, 18, 66, 93, 404, 342, 186, 515, 27, 24, 22, 336, 262];

let palindromSayilar = [];
let normalSayilar = [];

for (let index = 0; index < sayilar.length; index++) {
  let element = sayilar[index];
  let temp = element.toString().split("");
  let y = temp.join("");
  let yR = temp.reverse().join("");
  if (y === yR) {
    palindromSayilar.push(y);
  } else {
    normalSayilar.push(yR);
  }
}

console.log(palindromSayilar);
console.log(normalSayilar);
