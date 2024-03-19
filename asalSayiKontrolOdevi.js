//---------------BENİM ASAL KONTROL KODLARIM (ÖDEVDİ)-----------------------

// let sayiii = Math.floor(Math.random() * 101);

// const yyy = (y) => {
//   if (y < 2) {
//     return false;
//   } else {
//     for (let index = 2; index < y; index++) {
//       if (y % index === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const bolme = (a) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(asalKontrolModule.yyy(sayiii));
//       if (asalKontrolModule.yyy(sayiii) === false) {
//         resolve("asal sayı değil");
//       } else {
//         reject("asal sayı");
//       }
//     }, 500);
//   });
// };

// bolme(sayiii)
//   .then((asalDeil) => {
//     console.log(asalDeil);
//   })
//   .catch((asal) => {
//     console.log(asal);
//   })
//   .finally((fin) => {
//     console.log("sayiii: ", sayiii);
//   });

//---------------1'DEN 100'E KADAR 100 TANE SAYININ ASAL KONTROLÜ-------------------------

let sayilar = [];
let asalSayilar = [];
let randomSayi = 0;
let asalOlmayanSayilar = [];

for (let index = 0; index < 100; index++) {
  randomSayi = Math.floor(Math.random() * 100) + 1;
  sayilar.push(randomSayi);
}

function asalKontrol(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const asalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    for (let index = 0; index < sayilar.length; index++) {
      if (
        asalKontrol(sayilar[index]) &&
        !asalSayilar.includes(sayilar[index])
      ) {
        asalSayilar.push(sayilar[index]);
      }
      if (
        !asalOlmayanSayilar.includes(sayilar[index]) &&
        !asalKontrol(sayilar[index])
      ) {
        asalOlmayanSayilar.push(sayilar[index]);
      }
    }
    resolve({
      asalSayilar: asalSayilar,
      asalOlmayanSayilar: asalOlmayanSayilar,
    });
  }, 500);
});

//----------------SIRALAMA ŞEYSİ----------------------------

const bubblesort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

asalPromise
  .then((res) => {
    bubblesort(asalSayilar);
    console.log("büyükten küçüğe asal sayılar :", asalSayilar);
    bubblesort(asalOlmayanSayilar);
    console.log("büyükten küçüğe asal olmayan sayılar :", asalOlmayanSayilar);
  })
  .catch((err) => {
    console.log(err);
  });
