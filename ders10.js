// // FONKSİYON TEKRAR

// console.log(Math.floor(Math.random() * 11));
// let randomSayi = null;
// for (let index = 0; index >= 0; index++) {
//   randomSayi = Math.floor(Math.random() * 11);
//   console.log(randomSayi);
//   if (randomSayi === 10) {
//     console.log(index + 2, ". döngüde kırıldı");
//     break;
//   }
// }

// let sayi = Math.floor(Math.random() * 11)

// const ciftSayi = (a) => {
//     console.log("bu bir çift sayıdır", a);
// };

// const tekSayi = (a) => {
//     console.log("bu bir tek sayıdır", a);
// };

// sayi % 2 === 0 ? ciftSayi(sayi) : tekSayi(sayi)
// // BUNU ALGORİTMA DERSİNDE ERGUN HOCA KESSSİN SORAR ---^

// const toplam = (sayi1, sayi2, cb) => {
//   cb(sayi1 + sayi2);
// };

// const ekranaYazdir = (x) => {
//   console.log(x);
// };
// toplam(1, 7, ekranaYazdir);


const displayErrors = (err) => {
    console.log( "Hata oluştu",err, "Tarih",new Date()); 
}

const displayResponse = (res) => {
    console.log("cevap oluştu", res, "Tarih",new Date())
}

function bolme(a, b) {
    if (b === 0) {
        throw new Error("Bolen sayi 0 olamaz")
    } else {
        return a/b
    }
}

try {
   displayResponse(bolme(18, 9));
} catch (error) {
    displayErrors(error.message)
}

//network çak