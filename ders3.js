let meyveler = ["Elma", "Portakal", "Kivi", "Çilek", "Karpuz"];
let sayilar = [1, 2, 3, 4, 5, 6, 7];
let kullanicilar = [
  {
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
  },
  {
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
  },
];

// console.log(kullanicilar);

// console.log("Meyveler:", meyveler);
// console.log(meyveler[0]);
// ^^^ 0. index veya 0. indis ^^^

let uzunlukMeyveler = meyveler.length;
// console.log(uzunlukMeyveler);
// console.log(meyveler[uzunlukMeyveler - 1]);

let uzunlukSayilar = sayilar.length;
// console.log(uzunlukSayilar);

let dizi1 = [1, 2, 3, 4, ["Elma", "Çİlek", "Karpuz"], 5, [1, 2, 3]];
// console.log(dizi1[4][1]);

meyveler.unshift("Erik");
console.log(meyveler);

//  \n alt satıra yazdırır

let puan = 85;
let karneNotu;

if (puan >= 90 && puan <= 100) {
  console.log("Notunuz AA");
  karneNotu = "AA";
} else if (puan >= 80 && puan < 90) {
  console.log("Notunuz BA");
  karneNotu = "BA";
} else if (puan >= 70 && puan < 80) {
  console.log("Notunuz BB");
  karneNotu = "BB";
} else if (puan >= 60 && puan < 70) {
  console.log("Notunuz CC");
  karneNotu = "CC";
} else if (puan < 60 && puan >= 0) {
  console.log("Kaldınız");
  karneNotu = "FF";
} else {
  console.log("Geçersiz puan");
}

puan < 60 ? console.log("Kaldınız") : console.log("Geçtiniz");

switch (karneNotu) {
  case "AA":
    console.log("Karne notu AA");
    break;
  case "BA":
    console.log("Karne notu BA");
    break;
  case "BB":
    console.log("Karne notu BB");
    break;
  case "CC":
    console.log("Karne notu CC");
    break;
  case "FF":
    console.log("Karne notu FF");
    break;

  default:
    console.log("Geçersiz karne notu");
    break;
}

let yas = 17;
let sinif = "SAY";

if (yas < 18) {
  if (sinif === "SAY") {
    console.log("Matematiğe iyi odaklan");
  } else if (sinif === "DİL") {
    console.log("İngilizceye iyi odaklan");
  } else {
    console.log("Böyle bir alan bilmiyorum");
  }
}
