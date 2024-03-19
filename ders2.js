// let isim = "vera";
// let yas = 18;
// let sayilar = [1, 2, 3, 4, 5];
// let dogruMu = true;
// let adres = {sokak: "martı", mahalle: "dumlupınar", il: "bursa" };

// console.log("isim değişkeninin tipi:", typeof isim);
// console.log("isim değişkeninin tipi:", typeof yas);
// console.log("isim değişkeninin tipi:", typeof sayilar);
// console.log("isim değişkeninin tipi:", typeof dogruMu);
// console.log("isim değişkeninin tipi:", typeof adres.il);

// let sayi1 = 10;
// let sayi2 = 5;

// //toplam
// let toplam = sayi1 + sayi2;
// //cikartma
// let cikartma = sayi1 - sayi2;
// //carpma
// let carpma = sayi1 * sayi2;
// //bolme
// let bolme = sayi1 / sayi2;
// //mod
// let mod = sayi1 % sayi2;
// //kare
// let kare = sayi1 ** 2
// //karekok
// let karekok = sayi1 ** (1/2)

// console.log(toplam, cikartma, carpma, bolme, mod, kare, karekok);

//MANTIKSAL OPERATÖRLER

//ve operatörü ikiside true olunca true der &&
//veya operatörü ikisinden biri true olunca true der ||
// let x = true;
// let y = false;
// let z = true;

// console.log(x && y);
// console.log(x || y);
// console.log(!(x && y));
// console.log(!(x || y));


let sayi1 = 9
let sayi2 = '9'

console.log(sayi1 == sayi2);
console.log(sayi1 === sayi2);

let kullanici1 = {
  isim: "Vera",
  soyisim: "Değerli",
  firma: {
    isim: "Açık Atölye",
    adres: {
      il: "Bursa",
      ilçe: "Nilüfer",
    },
  },
  adres: {
    il: "İzmir",
    ilce: "Buca",
  },
};

let kullanici2 = {
    isim: "Bera",
    soyisim: "Değerli",
    firma: {
      isim: "Açık Atölye",
      adres: {
        il: "Bursa",
        ilçe: "Yıldırım",
      },
    },
    adres: {
      il: "İzmir",
      ilce: "Karşıyaka",
    },
  };

// console.log(kullanici1);
// console.log(kullanici2);

let firmaAdresSorgusu = kullanici1.firma.adres === kullanici2.firma.adres
console.log("Firma ismi sorgusu:", firmaAdresSorgusu);
console.log(kullanici1.adres.ilce);

console.log(kullanici1.isim === kullanici2.isim && kullanici1.firma.isim === kullanici2.firma.isim);
kullanici1.isim = kullanici2.isim
console.log(kullanici1.isim === kullanici2.isim && kullanici1.firma.isim === kullanici2.firma.isim);

const PORT = 6000 || 6001
console.log(`Uygulama ${PORT} portunda çalışıyor`); 
console.log(`${kullanici1.isim} isimli kullanıcı, ${kullanici1.firma.isim} isimli firmada çalışıyor, ${kullanici1.firma.isim}'nin adresi şu: ${kullanici1.firma.adres.il}/${kullanici1.firma.adres.il.ilçe}`);