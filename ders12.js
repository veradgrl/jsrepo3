// const soz = new Promise ((resolve, reject) => {
//     setTimeout(() => {

//     }, 1500);
// })

const bolme = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject("Bölen sayı 0 olamaz");
      } else {
        resolve(a / b);
      }
    }, 2000);
  });
};

bolme(9, 9)
  .then((result) => {
    console.log("işlem başarılı", result);
  })
  .catch((error) => {
    console.log("işlem başarısız", error);
  });
