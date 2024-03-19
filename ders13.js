// let sayi = 10;
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (sayi % 2 === 0) {
//       resolve("sayı çift");
//     } else {
//       reject("sayı tek");
//     }
//   }, 2500);
// });

// myPromise
//   .then((sonuc) => {
//     console.log(sonuc);
//   })
//   .catch((hata) => {
//     console.log(hata);
//   });


const axios = require('axios')
 

axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log(res.data);
})