//____HAVA DURUMU "İF-ELSE" İLE
// let havadurumlari = ["güneşli", "yağmurlu", "karlı"];
// let yas = 8;
// let anlikhava = "güneşli";

// if (anlikhava === "güneşli") { 
//   console.log("dışarı çık");
// } else if (anlikhava === "yağmurlu") {
//   console.log("şemsiyenle dışarı çık");
// } else if (anlikhava === "karlı" && yas < 10) {
//   console.log("kartopu oyna");
// }

//___HAVA DURUMU "SWİTCH-CASE" İLE
// switch (anlikhava) {
//   case "güneşli":
//     console.log("güneş kremini sür ve dışarı çık");
//     break;
//   case "yağmurlu":
//     console.log("şemsiyeni al ve dışarı çık");
//     break;
//   case "karlı":
//     if (yas < 10) {
//       console.log("kartopu oynayabilirsin (3");
//     } else {
//       console.log("kartopu oynayamazsın >:| ");
//     }
//     break;
// }
 
//_____FOR
// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }

// for (let index = 0; index < 5; index++) {
//     console.log(index * index);
// }

// index++ >>>> index = index + 1

//_____WHILE
// let sayac = 0
// while (sayac < 10) {
//     console.log(sayac);
//     sayac++
// }

let toplam = 0
// for (let index = 0; index <= 10; index++) {
//     toplam = toplam + index 
//     //buraya console log deseydik  her adımdaki cevabı yazıcaktı 
// }
// console.log(toplam);
// // dışına consolelog yazınca sadece sonucu yazıyor

// mr robot

// let i = 0
// while (i <= 10) {
//     toplam = toplam + i
//     i++
// }
// console.log(toplam);

// let meyveler = ["Elma", "Portakal", "Kivi", "Çilek", "Karpuz"];
// for (let index = 0; index < meyveler.length; index++) {
//     console.log(meyveler[index]);
// }

// for (let index = meyveler.length - 1; index >= 0; index--) {
//     console.log(meyveler[index]);
// }

// let kullanicilar = [
//     {
//       isim: "Vera",
//       soyisim: "Değerli",
//       firma: {
//         isim: "Açık Atölye",
//         adres: {
//           il: "Bursa",
//           ilçe: "Nilüfer",
//         },
//       },
//       adres: {
//         il: "İzmir",
//         ilce: "Buca",
//       },
//     },
//     {
//       isim: "Bera",
//       soyisim: "Değerli",
//       firma: {
//         isim: "Açık Atölye",
//         adres: {
//           il: "Bursa",
//           ilçe: "Yıldırım",
//         },
//       },
//       adres: {
//         il: "İzmir",
//         ilce: "Karşıyaka",
//       },
//     },
//   ];
  
// for (let index = 0; index < kullanicilar.length; index++) {
//     let element = kullanicilar[index];
//     console.log(element.isim);
// }

// let sayi = 10
// let faktoriyel = 1
// for (let index = 1; index <= sayi; index++) {
//     faktoriyel = faktoriyel *index

// }
// console.log(faktoriyel);

// let bolunenler = []
// let bolunmeyenler = []
// for (let index = 1; index <= 100; index++) {
//     if ( index % 3 === 0) {
//         bolunenler.push(index)
//     } else {
//         bolunmeyenler.push(index)
//     }
// }

// console.log(bolunenler);
// console.log(bolunmeyenler);

// let index = 1
// do {
//     console.log(index)
//     index++
// } while (index < 5);

let sayilar = []
let kareler = []
let sayac = 1 
while (sayac <= 10) {
    sayilar.push(sayac)
    sayac++
}

for (let index = 0; index < sayilar.length; index++) {
    kareler.push(sayilar[index] * sayilar[index])
}

console.log(sayilar);
console.log(kareler);